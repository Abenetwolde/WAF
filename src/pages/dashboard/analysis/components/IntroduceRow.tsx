import { InfoCircleOutlined } from '@ant-design/icons';
import { Area, Column } from '@ant-design/plots';
import { Col, Progress, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import Yuan from '../utils/Yuan';
import { ChartCard, Field } from './Charts';
import Trend from './Trend';
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};
const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => {
  const { styles } = useStyles();
  return (
    <Row gutter={24}>
      {/* <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title="Event Count"
        action={
          <Tooltip title="Event Count">
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={() => <Yuan>126560</Yuan>}
        footer={<Field label="Daily Sales" value={`￥${numeral(12423).format('0,0')}`} />}
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          Weekly Ratio
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag="down">
          Daily Ratio
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col> */}

      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="Total Event Count"
          action={
            <Tooltip title="Total Event Count">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(8846).format('0,0')}
          footer={<div>  <Trend
            flag="up"
            style={{
              marginRight: 16,
            }}
          >
            Weekly Ratio
            <span className={styles.trendText}>12%</span>
          </Trend>
            <Trend flag="down">
              Daily Ratio
              <span className={styles.trendText}>11%</span>
            </Trend></div>}
          contentHeight={46}

        >

          <Area
            xField="x"
            yField="y"
            shapeField="smooth"
            height={46}
            axis={false}
            style={{
              fill: 'linear-gradient(-90deg, white 0%, #0198e1 100%)',
              fillOpacity: 0.6,
              width: '100%',
            }}
            padding={-20}
            data={visitData}

          />

        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="Total Blocked Event Count"
          action={
            <Tooltip title="Total Blocked Event Count">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(2446).format('0,0')}
          footer={<div>  <Trend
            flag="up"
            style={{
              marginRight: 16,
            }}
          >
            Weekly Ratio
            <span className={styles.trendText}>12%</span>
          </Trend>
            <Trend flag="down">
              Daily Ratio
              <span className={styles.trendText}>11%</span>
            </Trend></div>}
          contentHeight={46}

        >

          <Area
            xField="x"
            yField="y"
            shapeField="smooth"
            height={46}
            axis={false}
            style={{
              fill: 'linear-gradient(-90deg, white 0%, red 100%)',
              fillOpacity: 0.6,
              width: '100%',
            }}
            padding={-20}
            data={visitData}

          />

        </ChartCard>
      </Col>
      {/* <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="Number of Transactions"
          action={
            <Tooltip title="Indicator Explanation">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(1780).format('0,0')}
          footer={<Field label="Conversion Rate" value="60%" />}
          contentHeight={46}
        >
          <Column
            xField="x"
            yField="y"
            padding={-20}
            axis={false}
            height={46}
            data={visitData}
            scale={{ x: { paddingInner: 0.4 } }}
          />
        </ChartCard>
      </Col> */}
      {/* <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          bordered={false}
          title="Effectiveness of Operational Activities"
          action={
            <Tooltip title="Indicator Explanation">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total="78%"
          footer={
            <div
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
            >
              <Trend
                flag="up"
                style={{
                  marginRight: 16,
                }}
              >
                Weekly Ratio
                <span className={styles.trendText}>12%</span>
              </Trend>
              <Trend flag="down">
                Daily Ratio
                <span className={styles.trendText}>11%</span>
              </Trend>
            </div>
          }
          contentHeight={46}
        >
          <Progress percent={78} strokeColor={{ from: '#108ee9', to: '#87d068' }} status="active" />
        </ChartCard>
      </Col> */}

    </Row>
  );
};
export default IntroduceRow;
