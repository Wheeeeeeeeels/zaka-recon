import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Viewer from './pages/Viewer';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header>
          <Navbar />
        </Header>
        <Content className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/viewer" element={<Viewer />} />
          </Routes>
        </Content>
        <Footer className="text-center">
          ZakaRecon ©{new Date().getFullYear()} Created by Zaka
        </Footer>
      </Layout>
    </Router>
  );
}

export default App; 