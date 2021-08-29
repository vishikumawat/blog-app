import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const NavBar = () => {

  const [current, setCurrent] = useState("1")
  useEffect(()=>{
    const path = window.location.pathname
    if(path === "/")
      setCurrent("1")
  },[])

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={e=>setCurrent(e.key)}
        selectedKeys={[current]}
      >
        <Menu.Item key="1">
          <Link to={"/"}>
            Blogs
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default NavBar