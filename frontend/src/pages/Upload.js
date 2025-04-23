import React, { useState } from 'react';
import { Upload, message, Card, Tabs, Button, Progress } from 'antd';
import { InboxOutlined, CameraOutlined, DroneOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Dragger } = Upload;
const { TabPane } = Tabs;

const UploadPage = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploading(true);
      const response = await axios.post('http://localhost:8000/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      });

      if (response.data.status === 'success') {
        message.success('文件上传成功！');
      } else {
        message.error('上传失败：' + response.data.error);
      }
    } catch (error) {
      message.error('上传失败：' + error.message);
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'http://localhost:8000/upload/',
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    },
  };

  return (
    <div className="container mx-auto">
      <Card title="数据上传" className="mb-8">
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <CameraOutlined />
                照片上传
              </span>
            }
            key="1"
          >
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">点击或拖拽文件到此区域上传</p>
              <p className="ant-upload-hint">
                支持单个或批量上传，建议使用专业相机拍摄的照片
              </p>
            </Dragger>
          </TabPane>

          <TabPane
            tab={
              <span>
                <DroneOutlined />
                无人机数据
              </span>
            }
            key="2"
          >
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">点击或拖拽文件到此区域上传</p>
              <p className="ant-upload-hint">
                支持上传无人机航拍照片和位置信息
              </p>
            </Dragger>
          </TabPane>
        </Tabs>

        {uploading && (
          <div className="mt-4">
            <Progress percent={progress} status="active" />
          </div>
        )}
      </Card>
    </div>
  );
};

export default UploadPage; 