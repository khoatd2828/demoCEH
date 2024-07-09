import React, { useState } from 'react';
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const items = [
  {
    label: 'Login',
    key: 'login',
    icon: <UserOutlined />,
  },
  {
    label: 'DashBoard',
    key: 'home',
    icon: <AppstoreOutlined />,
  },
];
export const SideMenu = () => {
  const [current, setCurrent] = useState('');
  const navigate = useNavigate()
  const onClick = (e) => {
    navigate(`/${e.key}`);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};