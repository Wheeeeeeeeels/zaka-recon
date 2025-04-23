import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, UploadOutlined, EyeOutlined } from '@ant-design/icons';

const Navbar = () => {
  const location = useLocation();

  const items = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">首页</Link>,
    },
    {
      key: '/upload',
      icon: <UploadOutlined />,
      label: <Link to="/upload">上传</Link>,
    },
    {
      key: '/viewer',
      icon: <EyeOutlined />,
      label: <Link to="/viewer">查看器</Link>,
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={items}
    />
  );
};

export default Navbar; 