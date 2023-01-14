import React from "react";
import { Layout, theme } from "antd";
import "../css/footer.css";
const { Footer } = Layout;

const FooterComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Footer
      className='footerContainer'
      style={{ background: colorBgContainer }}
    >
      <h1> Footer</h1>
    </Footer>
  );
};

export default FooterComponent;
