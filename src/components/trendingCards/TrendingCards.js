import React from 'react';
import { Card, Rate } from 'antd';
import './TrendingCards.css';
import { FontColorsOutlined, BookOutlined, FilePptOutlined, MediumOutlined, PinterestOutlined, Html5Outlined, ItalicOutlined } from '@ant-design/icons';
const { Meta } = Card;
const TrendingCards = () => {
  return (
    <div className='traditionals'>
      <div className='vikki'>
        <Card
          hoverable
          style={{
            width: 270,


          }}
          cover={<div className='surf1'>
            <div className='zx1'>
              <FontColorsOutlined className='kl1' />
              <h4 className='sh'>Angular Development Courses</h4>
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
          cover={<div className='arf2'>
            <div className='zx1'>
              < ItalicOutlined className='kb3' />
              <h4 className='sh'>React Development Courses</h4>
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
          cover={<div className='akf3'>
            <div className='zx1'>
              < Html5Outlined className='kk4' />
              <h4 className='sh'>Mobile Development Courses</h4>
            </div>
          </div>}
        >
          <p>Angular is an open-source framework for building web applications, primarily single-page applications.</p>
          <hr></hr>
          <h4><span>Reviews</span></h4>
          <Rate allowHalf defaultValue={2.5} /> 5.0(256)
        </Card>
      </div>
      <div className='inline'>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<div className='amfg'>
            <div className='zx1'>
              <FontColorsOutlined className='ki4' />
              <h4 className='sh'>Python Development Courses</h4>
            </div>
          </div>}
        >
          <div className='suri'>
          <p>Angular is an open-source framework for building web applications, primarily single-page applications.</p>
          <hr></hr>
          <h4><span>Reviews</span></h4>
          <Rate allowHalf defaultValue={2.5} /> 5.0(256)
          
          </div>
        </Card>
        <div className='carddata'>
          <p>Vancover Mountains Canada</p>
          <h2>Great path</h2>
          <a href='#'>Read More</a>

        </div>
        
      </div>
      <div className='vikki'>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<div className='axf8'>
            <div className='zx1'>
              <Html5Outlined className='kj6' />
              <h4 className='sh'>Viue Development Courses</h4>
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
          cover={<div className='apf9'>
            <div className='zx1'>
              <BookOutlined className="lkj" />
              <h4 className='sh'>Fullstack Development Courses</h4>
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
          cover={<div className='appu1'>
            <div className='zx1'>
              <FontColorsOutlined className='viru1' />
              <h4 className='sh'>Angular Development Courses</h4>
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
          cover={<div className='appi1'>
            <div className='zx1'>
              <MediumOutlined className='viri1' />
              <h4 className='sh'>Angular Development Courses</h4>
            </div>
          </div>}
        >
          <p>Angular is an open-source framework for building web applications, primarily single-page applications.</p>
          <hr></hr>
          <h4><span>Reviews</span></h4>
          <Rate allowHalf defaultValue={2.5} />5.0(256)
        </Card>
      </div>
      <div className='vikki'>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<div className='appo2'>
            <div className='zx1'>
              <FilePptOutlined className='viro2' />
              <h4 className='sh'>Angular Development Courses</h4>
            </div>
          </div>}
        >
          <p>Angular is an open-source framework for building web applications, primarily single-page applications.</p>
          <hr></hr>
          <h4><span>Reviews</span></h4>
          <Rate allowHalf defaultValue={2.5} />5.0(256)
          
        </Card>
        
        
      </div>
      <div className='vikki'>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<div className='appe1'>
            <div className='zx1'>
              <PinterestOutlined className='vire1' />
              <h4 className='sh'>Angular Development Courses</h4>
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
export default TrendingCards;