import React, { useState } from 'react';
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import './menu.scss'

const items = [
  {
    label: 'Login',
    key: 'login',
    icon: <UserOutlined />,
  },
  {
    label: 'DashBoard',
    key: '',
    icon: <AppstoreOutlined />,
  },
];

export const SideMenu = () => {
  const [current, setCurrent] = useState('');
  const navigate = useNavigate();

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };

  return (
    <div className="menu-container">
      <Menu
        className='menu-container'
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};