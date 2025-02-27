import React from 'react';
import { Card,Rate } from 'antd';
import'./Recentproducts.css'
import { FontColorsOutlined,BoldOutlined,JavaOutlined ,PythonOutlined  } from '@ant-design/icons';
 
const { Meta } = Card;
 
const Recentproducts = () => {
    return(
        <div className='rece '>
        <div className='vikki'>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<div className='akka'>
      <div className='dh1'>
        <FontColorsOutlined className='sz2' />
        <h4 className='sj'>Angular Development Courses</h4>
      </div>
    </div>}
  >
    <p>Angular is an open-source framework for building web applications, primarily single-page applications.</p>
      <hr></hr>
      <h4><span>Reviews</span></h4>
      <Rate allowHalf defaultValue={2.5} /> 5.0(256)
  </Card>
  </div>
  <div className='vikki'>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<div className='dhoni'>
                <div className='dh1'>
                  <JavaOutlined  className='dh2' />
                  <h4 className='dh'>Java Development Courses</h4>
                </div>
              </div>}
  ><p>Angular is an open-source framework for building web applications, primarily single-page applications.</p>
  <hr></hr>
  <h4><span>Reviews</span></h4>
  <Rate allowHalf defaultValue={2.5} /> 5.0(256)
  </Card>
  </div>
  <div className='vikki'>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<div className='hardik'>
                <div className='dh1'>
                  <PythonOutlined  className='hr2' />
                  <h4 className='hr'>Python Development Courses</h4>
                </div>
              </div>}
  >
    <p>Angular is an open-source framework for building web applications, primarily single-page applications.</p>
      <hr></hr>
      <h4><span>Reviews</span></h4>
      <Rate allowHalf defaultValue={2.5} /> 5.0(256)
  </Card>
  </div>
  <div className='vikki'>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<div className='nithin'>
                <div className='dh1'>
                  <BoldOutlined  className='nithin2' />
                  <h4 className='nithin3'>Kubernet Development Courses</h4>
                </div>
              </div>}
  >
    <p>Angular is an open-source framework for building web applications, primarily single-page applications.</p>
      <hr></hr>
      <h4><span>Reviews</span></h4>
      <Rate allowHalf defaultValue={2.5} /> 5.0(256)
  </Card>
  </div>
  </div>
  
);
}
export default Recentproducts;