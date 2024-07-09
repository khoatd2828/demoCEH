import React from 'react';
import { Avatar, Card, Col, List, Progress, Row, Statistic, Table } from 'antd';

export const Home = () => {
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
      title: 'Ant Design Title 1',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    },
    {
      title: 'Ant Design Title 2',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="Active Users" value={112893} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Orders" value={6181} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Revenue" value={112893} precision={2} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Growth" value={15.93} suffix="%" />
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