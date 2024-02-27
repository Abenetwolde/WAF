import { useState } from 'react';
import { Card, Col, DatePicker, Row, Tabs } from 'antd';
import { Column } from '@ant-design/plots';
import dayjs from 'dayjs';
import numeral from 'numeral';
import useStyles from '../style.style';
import ReactApexChart from 'react-apexcharts';
import TabPane from 'antd/es/tabs/TabPane';

export type TimeType = 'today' | 'week' | 'month' | 'year';

const { RangePicker } = DatePicker;

const generateFakeData = () => {
  const data = [];
  const countries = [
    'United States',
    'China',
    'India',
    'Brazil',
    'Pakistan',
    'Nigeria',
    'Bangladesh',
    'Russia',
    'Mexico',
    'Japan',
  ];

  for (let i = 0; i < countries.length; i++) {
    data.push({
      x: countries[i],
      y: Math.floor(Math.random() * 1000), // Random number of requests
    });
  }
  return data;
};

interface RankingItem {
  number: number;
  title: string;
  value: number;
}

const RankingList = ({ data }: { data: RankingItem[] }) => {
  const { styles } = useStyles();

  return (
    <Col xs={24} lg={8}>
      <div className={styles.salesRank}>
        <h4 className={styles.rankingTitle}>Countries Ranking</h4>
        <ul className={styles.rankingList}>
          {data.map((item, index) => (
            <li key={index}>
              <span className={styles.rankingItemNumber}>{item.number}</span>
              <span className={styles.rankingItemTitle}>{item.title}</span>
              <span>{numeral(item.value).format('0,0')} Requests</span>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  );
};


const SalesCard = ({ loading }: { loading: boolean }) => {
  const [rangePickerValue, setRangePickerValue] = useState<[dayjs.Dayjs, dayjs.Dayjs]>([dayjs().subtract(6, 'day'), dayjs()]);
  const [activeTab, setActiveTab] = useState<TimeType>('today');

  const handleRangePickerChange = (dates: any) => {
    setRangePickerValue([dates[0], dates[1]]);
  };

  const selectDate = (type: TimeType) => {
    setActiveTab(type);
  };

  const { styles } = useStyles();

  const renderChart = (title: string, data: any[]) => {
    const options = {
      chart: {
        toolbar: {
          show: true,
        },
      },
      xaxis: {
        categories: data.map(item => item.x),
        labels: {
          rotate: -45,
          style: {
            colors: '#333',
          },
        },
      },
      yaxis: {
        title: {
          text: 'Requests',
          style: {
            color: '#333',
          },
        },
      },
      colors: ['#1890ff', '#2fc25b', '#facc14', '#223273', '#8543e0', '#13c2c2', '#3436c7', '#f04864', '#faad14', '#8543e0'],
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        y: {
          formatter: (value: any) => numeral(value).format('0,0'),
        },
      },
    };

    const series = [{
      name: 'Requests',
      data: data.map(item => item.y),
    }];

    return (
      <Col xs={24} lg={16}>
        <div className={styles.salesBar}>
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
      </Col>
    );
  };

  return (
    <Card
      loading={loading}
      bordered={false}
      bodyStyle={{
        padding: 0,
      }}
    >
      <div className={styles.salesCard}>
        <p className={styles.trendText}>Top 10 countries</p>
        <Tabs
          defaultActiveKey="today"
          tabBarExtraContent={
            <div className={styles.salesExtraWrap}>
              <RangePicker
                value={rangePickerValue}
                onChange={handleRangePickerChange}
                style={{ width: 256 }}
              />
            </div>
          }
          size="large"
          tabBarStyle={{ marginBottom: 24 }}
          onChange={selectDate}
        >
          <TabPane tab="Today" key="today">
            <Row gutter={[16, 16]}>
              {renderChart('Today Requests', generateFakeData())}
              <Col xs={24} lg={8}>
                <div className={styles.salesRank}>
                  <h4 className={styles.rankingTitle}>Countries Ranking</h4>
                  <ul className={styles.rankingList}>
                    {generateFakeData().map((item, index) => (
                      <li key={index}>
                        <span className={styles.rankingItemNumber}>{index + 1}</span>
                        <span className={styles.rankingItemTitle}>{item.x}</span>
                        <span>{numeral(item.y).format('0,0')} Requests</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Week" key="week">
          <Row gutter={[16, 16]}>
              {renderChart('Today Requests', generateFakeData())}
              <Col xs={24} lg={8}>
                <div className={styles.salesRank}>
                  <h4 className={styles.rankingTitle}>Store Sales Ranking</h4>
                  <ul className={styles.rankingList}>
                    {generateFakeData().map((item, index) => (
                      <li key={index}>
                        <span className={styles.rankingItemNumber}>{index + 1}</span>
                        <span className={styles.rankingItemTitle}>{item.x}</span>
                        <span>{numeral(item.y).format('0,0')} Requests</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Month" key="month">
          <Row gutter={[16, 16]}>
              {renderChart('Today Requests', generateFakeData())}
              <Col xs={24} lg={8}>
                <div className={styles.salesRank}>
                  <h4 className={styles.rankingTitle}>Store Sales Ranking</h4>
                  <ul className={styles.rankingList}>
                    {generateFakeData().map((item, index) => (
                      <li key={index}>
                        <span className={styles.rankingItemNumber}>{index + 1}</span>
                        <span className={styles.rankingItemTitle}>{item.x}</span>
                        <span>{numeral(item.y).format('0,0')} Requests</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Year" key="year">
          <Row gutter={[16, 16]}>
              {renderChart('Today Requests', generateFakeData())}
              <Col xs={24} lg={8}>
                <div className={styles.salesRank}>
                  <h4 className={styles.rankingTitle}>Store Sales Ranking</h4>
                  <ul className={styles.rankingList}>
                    {generateFakeData().map((item, index) => (
                      <li key={index}>
                        <span className={styles.rankingItemNumber}>{index + 1}</span>
                        <span className={styles.rankingItemTitle}>{item.x}</span>
                        <span>{numeral(item.y).format('0,0')} Requests</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Card>
  );
};

export default SalesCard;
