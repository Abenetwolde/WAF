import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Table, Tooltip } from 'antd';
import numeral from 'numeral';
import React from 'react';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import Trend from './Trend';

const TopSearch = ({
  loading,
  dropdownGroup,
}: {
  loading: boolean;
  dropdownGroup: React.ReactNode;
}) => {
  const { styles } = useStyles();

  // Generate 40 fake data items
  const searchData: DataItem[] = [];
  for (let i = 1; i <= 40; i++) {
    searchData.push({
      index: i,
      url: `http://example.com/${i}`,
      count: Math.floor(Math.random() * 1000),
      persentage: Math.random() * 100,
      status: Math.random() > 0.5 ? 1 : 0, // Randomly assign status for trend
    });
  }

  const columns = [
    {
      title: 'Ranking',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
      render: (text: React.ReactNode) => <a href="/">{text}</a>,
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
      sorter: (a: DataItem, b: DataItem) => a.count - b.count,
      render: (text: number) => numeral(text).format('0,0'),
    },
    {
      title: 'Count Percentage',
      dataIndex: 'persentage',
      key: 'persentage',
      sorter: (a: DataItem, b: DataItem) => a.persentage - b.persentage,
      render: (text: number) => (
   
          <span style={{ marginRight: 4 }}>{numeral(text).format('0.00')/10}%</span>
    
      ),
    },
  ];

  return (
    <Card
      loading={loading}
      bordered={false}
      title="URL Requsted"
      extra={dropdownGroup}
      style={{
        height: '100%',
      }}
    >
      <Table
        rowKey={(record) => record.index}
        size="small"
        columns={columns}
        dataSource={searchData}
        pagination={{
          style: {
            marginBottom: 0,
          },
          pageSize: 5,
        }}
      />
    </Card>
  );
};

export default TopSearch;
