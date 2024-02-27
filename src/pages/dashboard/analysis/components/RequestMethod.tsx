import { Pie } from '@ant-design/plots';
import { Card, Radio, Typography } from 'antd';
import type { RadioChangeEvent } from 'antd/es/radio';
import numeral from 'numeral';
import React from 'react';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
const { Text } = Typography;
const RequestMethod = ({
  dropdownGroup,
  salesType,
  loading,
  salesPieData,
  handleChangeSalesType,
}: {
  loading: boolean;
  dropdownGroup: React.ReactNode;
  salesType: 'all' | 'online' | 'stores';
  salesPieData: DataItem[];
  handleChangeSalesType?: (e: RadioChangeEvent) => void;
}) => {
  // Function to generate fake data for cyber attack types with dates
const generateCyberAttackData = () => {
  const cyberAttackTypes = ['GET', 'POST', 'HEAD'];
  const startDate = new Date('2024-01-01');
  const endDate = new Date('2024-02-29');
  const data = [];

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * cyberAttackTypes.length);
    const attackType = cyberAttackTypes[randomIndex];
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const formattedDate = `${randomDate.getFullYear()}-${(randomDate.getMonth() + 1).toString().padStart(2, '0')}-${randomDate.getDate().toString().padStart(2, '0')}`;
    data.push({
      date: formattedDate,
      type: attackType,
      count: Math.floor(Math.random() * 100) + 1, // Random count of attacks
    });
  }

  return data;
};

// Function to filter cyber attack data based on date range
const filterCyberAttackData = (data, startDate, endDate) => {
  const filteredData = data.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= startDate && itemDate <= endDate;
  });

  // Structure the filtered data for Pie chart
  const formattedData = filteredData.map(item => ({
    x: item.type, // Attack type as x
    y: item.count, // Count as y
  }));

  return formattedData;
};

// Usage example
const cyberAttackData = generateCyberAttackData();
const startDate = new Date('2024-01-15');
const endDate = new Date('2024-02-15');
const filteredData = filterCyberAttackData(cyberAttackData, startDate, endDate);
console.log(filteredData);

  const { styles } = useStyles();
  return (
    <Card
      loading={loading}
      className={styles.salesCard}
      bordered={false}
      title="Request Method"
      style={{
        height: '100%',
      }}
      extra={dropdownGroup}
    >
      <div>
      
        <Pie
          height={340}
          radius={0.8}
          innerRadius={0.5}
          angleField="y"
          colorField="x"
          data={filteredData as any}
          legend={true}
          label={{
            position: 'spider',
            text: (item: { x: number; y: number }) => {
              return `${item.x}: ${numeral(item.y).format('0,0')}`;
            },
          }}
        />
      </div>
    </Card>
  );

  
};
export default RequestMethod;
