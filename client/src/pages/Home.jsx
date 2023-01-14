import React from "react";

//components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

//ant design
import { Layout, theme } from "antd";

const { Content } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sidebar />
        <Layout>
          <Navbar
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 600,
                background: colorBgContainer,
              }}
            >
              <Contents />
            </div>
          </Content>
        </Layout>
      </Layout>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
