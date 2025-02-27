
import React from 'react';
import { Card } from 'antd';
 import './Discover.css'
 import { RubyOutlined,BranchesOutlined,CompassOutlined,ConsoleSqlOutlined,DisconnectOutlined,MacCommandOutlined,DollarOutlined,ExportOutlined,GlobalOutlined,FundProjectionScreenOutlined,ForkOutlined,GoldOutlined} from '@ant-design/icons';
const Discover = () => {
    return(
        <div className='discovery'>
            <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<RubyOutlined className='guru' />}
  >
    <h5 style={{position:'relative',bottom:'40px'}}>Andoid developer</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<BranchesOutlined  className="guru1"/>}
  >
    <h5 style={{position:'relative',bottom:'40px'}}>Digital Marketing</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<CompassOutlined  className="guru3"/>}
  >
    <h5 style={{position:'relative',bottom:'40px'}}>Digital Marketing</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<ConsoleSqlOutlined className="guru4" />}
  >
    <h5 style={{position:'relative',bottom:'50px'}}>Framework</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<DisconnectOutlined  className="guru5"/>}
  >
    <h5 style={{position:'relative',bottom:'40px'}} >Devops</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<MacCommandOutlined className="dk2" />}
  >
    <h5 style={{position:'relative',bottom:'40px'}}>Data Types</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<DollarOutlined className="dk5" />}
  >
    <h5 style={{position:'relative',bottom:'40px'}}>Software Testing</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<ExportOutlined className="dk8" />}
  >
    <h5 style={{position:'relative',bottom:'50px'}}>Cloud Computing</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<GoldOutlined  className="govi8"/>}
  >
    <h5 style={{position:'relative',bottom:'40px'}}>Cyber security</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<ForkOutlined  className="govi6"/>}
  >
    <h5 style={{position:'relative',ottom:'40px'}}>Artificial Intelligence</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<FundProjectionScreenOutlined  className="govi3"/>}
  >
    <h5 style={{position:'relative',bottom:'40px'}}>Python</h5>
  </Card>
  </div>
  <div className='dis1'>
  <Card
    hoverable
    style={{
      width: 100,
      height:150
    }}
    cover={<GlobalOutlined  className="govinda"/>}
  >
    <h5 style={{position:'relative',bottom:'40px'}}>Big Data</h5>
  </Card>
  </div>
  
  </div>
);
}
export default Discover;