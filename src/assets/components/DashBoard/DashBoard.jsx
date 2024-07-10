import React, { useEffect, useState } from 'react';
import { Avatar, Card, Carousel, Col, List, Progress, Row, Statistic, Table } from 'antd';

export const DashBoard = () => {
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 25,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jane Smith',
      age: 28,
      address: 'Tokyo No. 1 Lake Park',
    },
  ];

  // Columns configuration for the table
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const listData = [
    {
      title: 'Nguyễn Trọng Phú',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'A passionate developer with a focus on frontend technologies.',
    },
    {
      title: 'Phạm Quang Minh',
      avatar: 'data:image/jpeg;base64,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',
      description: 'An experienced software engineer specializing in backend systems.',
    },
    {
      title: 'React Dashboard',
      avatar: 'data:image/png;base64,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',
      description: 'Building a dynamic React dashboard and custom components.',
    },
    {
      title: 'Sales Progress Update',
      avatar: 'data:image/jpeg;base64,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',
      description: 'Updating sales progress and tracking customer orders in real-time.',
    },
  ];

  const bannerData = [
    {
      image: 'https://cehsoft.com/wp-content/uploads/2023/09/sea-port-vtos.jpg',
    },
    {
      image: 'https://cehsoft.com/wp-content/uploads/2023/09/gtos3.png',
    },
    {
      image: 'https://cehsoft.com/wp-content/uploads/2023/09/cfs3.jpg',
    },
  ];

  const [activeUsers, setActiveUsers] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [growth, setGrowth] = useState(0);

  const increaseValues = () => {
    let interval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * 100000));
      setTotalOrders(Math.floor(Math.random() * 10000));
      setRevenue(Math.floor(Math.random() * 100000));
      setGrowth(parseFloat((Math.random() * 5).toFixed(2)));
    }); 

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);
  };

  useEffect(() => {
    increaseValues();
    return () => {};
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Row gutter={16}>
        <Col span={24}>
          <Carousel autoplay>
            {bannerData.map(item => (
              <div key={item.title}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="carousel-caption">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row gutter={16} className="mt-4">
        <Col span={6}>
          <Card>
            <Statistic title="Active Users" value={activeUsers} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Orders" value={totalOrders} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Revenue" value={revenue} precision={2} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Growth" value={growth} suffix="%" />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} className="mt-4">
        <Col span={12}>
          <Card title="Sales Progress">
            <Progress percent={70} />
            <Progress percent={50} status="active" />
            <Progress percent={30} status="exception" />
            <Progress percent={100} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Recent Activities">
            <List
              itemLayout="horizontal"
              dataSource={listData}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={24}>
          <Card title="User Data">
            <Table dataSource={dataSource} columns={columns} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
