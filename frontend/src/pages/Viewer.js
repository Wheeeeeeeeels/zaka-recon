import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Card, Button, Space } from 'antd';
import { DownloadOutlined, SettingOutlined } from '@ant-design/icons';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const Viewer = () => {
  return (
    <div className="container mx-auto">
      <Card
        title="3D模型查看器"
        extra={
          <Space>
            <Button icon={<SettingOutlined />}>设置</Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              导出
            </Button>
          </Space>
        }
      >
        <div style={{ height: '600px' }}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Suspense fallback={null}>
              <Model url="/path/to/your/model.glb" />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </Card>
    </div>
  );
};

export default Viewer; 