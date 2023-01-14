import React from "react";

import { Layout, Menu, theme } from "antd";
const { Header } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navItems = ["Home", "About"];

  const items1 = navItems.map((key) => ({
    label: `${key}`,
  }));
  return (
    <Header
      style={{ padding: 0, background: colorBgContainer }}
      className='header'
    >
      <div className='logo' />
      <Menu mode='horizontal' defaultSelectedKeys={["2"]} items={items1} />
    </Header>
  );
};

export default Navbar;
