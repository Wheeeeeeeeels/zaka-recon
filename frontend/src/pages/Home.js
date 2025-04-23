import React from 'react';
import { Typography, Card, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { UploadOutlined, EyeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div className="container mx-auto">
      <Title level={1} className="text-center mb-8">
        欢迎使用 ZakaRecon
      </Title>
      <Paragraph className="text-center text-lg mb-12">
        ZakaRecon 是一个基于多模态数据融合的智能建筑3D重建系统，
        能够将2D照片、深度相机数据、无人机航拍等多种数据源融合，
        生成高质量的3D模型，支持3D打印和微缩模型设计。
      </Paragraph>

      <Row gutter={[32, 32]} className="justify-center">
        <Col xs={24} sm={12} md={8}>
          <Card
            title="上传数据"
            className="h-full"
            actions={[
              <Link to="/upload">
                <Button type="primary" icon={<UploadOutlined />}>
                  开始上传
                </Button>
              </Link>,
            ]}
          >
            <Paragraph>
              支持上传2D照片、深度相机数据、无人机航拍等多种数据源，
              系统会自动进行数据融合和3D重建。
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="查看模型"
            className="h-full"
            actions={[
              <Link to="/viewer">
                <Button type="primary" icon={<EyeOutlined />}>
                  查看模型
                </Button>
              </Link>,
            ]}
          >
            <Paragraph>
              在3D查看器中预览重建的模型，支持旋转、缩放、平移等操作，
              可以导出为多种3D格式。
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home; 