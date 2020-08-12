import React from 'react';
import { Layout, Divider } from 'antd';
import AppStyles from './AppStyles';
import ExtractText from './components/ExtractText';
import ImgUpload from './components/ImgUpload';
import img from '../src/assets/img.svg';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <div className="logo">
          <h1 style={{ color: '#fff' }}>Textractor</h1>
        </div>
      </Header>
      <AppStyles>
        <Content style={{ padding: '0 50px' }}>
          <div className="hero">
            <h3>Extract text from images with ease</h3>
            <div className="img">
              <img src={img} alt="Hero design" />
            </div>
          </div>
          <div className="site-layout-content">
            <ExtractText />
            <Divider>OR</Divider>
            <ImgUpload />
          </div>
        </Content>
      </AppStyles>
      <Footer style={{ textAlign: 'center' }}>
        {new Date().getFullYear()} &copy; Created with AWS Services and Ant
        Design
      </Footer>
    </Layout>
  );
}

export default App;
