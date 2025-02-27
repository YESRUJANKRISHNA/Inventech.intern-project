import { Carousel } from "antd";
import React from "react";
import { Fade } from "react-bootstrap";
import { Card,Rate,Row,Col,RightOutlined } from "antd";
import'./Reviews.css'

   
 
const Reviews=()=>{
    const onChange=(Carouselslid)=>{
        console.log('Carouselslid:',Carouselslid)
    }
    return(
        <div className="gps">
        
            <Carousel
                  afterChange={onChange}
                  autoplay 
                  autoplaySpeed={1000} 
                  effect="fade" 
            >
                <div>
                <Row gutter={16}>
    <Col span={8}>
      <Card title="MANOJ" variant="borderless" className="card">
        <div className="curd">
      <h5>Angular Certification Training</h5>
      <Rate allowHalf defaultValue={2.5} /> 
      <p className="paragraph">I enrolled for Angular and React js training session conducted by AchieversIT ,It was a great learning experience and wonderful training sessions From Mr Murali and Muniraj. I’m enlightened with the quality and process they delivered. Their exceptional teaching has gained me great confidence to kick start my career to next level. Overall, it was a tremendous knowledge transfer experience. Once again, I thank him for their continuous support, patience, timely help. I.</p>
      <p>hvhjbjfvk</p>
      <button className="read">Read More</button>
      </div>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="KARUN" variant="borderless" className="card">
        <div className="curd">
      <h5>Angular Certification Training</h5>
      <Rate allowHalf defaultValue={2.5} /> 
      <p className="paragraph">I enrolled for Angular and React js training session conducted by AchieversIT ,It was a great learning experience and wonderful training sessions From Mr Murali and Muniraj. I’m enlightened with the quality and process they delivered. Their exceptional teaching has gained me great confidence to kick start my career to next level. Overall, it was a tremendous knowledge transfer experience. Once again, I thank him for their continuous support, patience, timely help. I.</p>
      <button className="read">Read More</button>
      </div>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="<SRUJAN" variant="borderless" className="card">
        <div className="curd">
      <h5>Angular Certification Training</h5>
      <Rate allowHalf defaultValue={2.5} /> 
      <p className="paragraph">I enrolled for Angular and React js training session conducted by AchieversIT ,It was a great learning experience and wonderful training sessions From Mr Murali and Muniraj. I’m enlightened with the quality and process they delivered. Their exceptional teaching has gained me great confidence to kick start my career to next level. Overall, it was a tremendous knowledge transfer experience. Once again, I thank him for their continuous support, patience, timely help. I.</p>
      <button className="read">Read More</button>
      </div>
      
      </Card>
    </Col>
  </Row>
</div>
<div>
<Row gutter={16}>
    <Col span={8}>
      <Card title="ARUN" variant="borderless" className="card">
        <div className="curd">
      <h5>Angular Certification Training</h5>
      <Rate allowHalf defaultValue={2.5} /> 
      <p className="paragraph">I enrolled for Angular and React js training session conducted by AchieversIT ,It was a great learning experience and wonderful training sessions From Mr Murali and Muniraj. I’m enlightened with the quality and process they delivered. Their exceptional teaching has gained me great confidence to kick start my career to next level. Overall, it was a tremendous knowledge transfer experience. Once again, I thank him for their continuous support, patience, timely help. I.</p>
      <button className="read">Read More</button>
      </div>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="SHASHANK" variant="borderless" className="card">
        <div className="curd">
      <h5>Angular Certification Training</h5>
      <Rate allowHalf defaultValue={2.5} /> 
      <p className="paragraph">I enrolled for Angular and React js training session conducted by AchieversIT ,It was a great learning experience and wonderful training sessions From Mr Murali and Muniraj. I’m enlightened with the quality and process they delivered. Their exceptional teaching has gained me great confidence to kick start my career to next level. Overall, it was a tremendous knowledge transfer experience. Once again, I thank him for their continuous support, patience, timely help. I.</p>
      <button className="read">Read More</button>
      </div>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="TEJAS" variant="borderless" className="card">
        <div className="curd">
      <h5>Angular Certification Training</h5>
      <Rate allowHalf defaultValue={2.5} /> 
      <p className="paragraph">I enrolled for Angular and React js training session conducted by AchieversIT ,It was a great learning experience and wonderful training sessions From Mr Murali and Muniraj. I’m enlightened with the quality and process they delivered. Their exceptional teaching has gained me great confidence to kick start my career to next level. Overall, it was a tremendous knowledge transfer experience. Once again, I thank him for their continuous support, patience, timely help. I.</p>
      <button className="read">Read More</button>
      </div>
      </Card>
    </Col>
  </Row>
</div>
<div>
<Row gutter={16}>
    <Col span={8}>
      <Card title="VARUN" variant="borderless" className="card">
        <div className="curd">
        <h5>Angular Certification Training</h5>
        <Rate allowHalf defaultValue={2.5} /> 
        <p className="paragraph">I enrolled for Angular and React js training session conducted by AchieversIT ,It was a great learning experience and wonderful training sessions From Mr Murali and Muniraj. I’m enlightened with the quality and process they delivered. Their exceptional teaching has gained me great confidence to kick start my career to next level. Overall, it was a tremendous knowledge transfer experience. Once again, I thank him for their continuous support, patience, timely help. I.</p>
        <button className="read">Read More</button>
        </div>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="SRUJAN" variant="borderless" className="card">
        <div className="curd">
        <h5>UI & Angular Certification Training</h5>
        <Rate allowHalf defaultValue={2.5} /> 
        <p className="paragraph">I enrolled for Angular and React js training session conducted by AchieversIT ,It was a great learning experience and wonderful training sessions From Mr Murali and Muniraj. I’m enlightened with the quality and process they delivered. Their exceptional teaching has gained me great confidence to kick start my career to next level. Overall, it was a tremendous knowledge transfer experience. Once again, I thank him for their continuous support, patience, timely help. I.</p>
        <button className="read">Read More</button>
        </div>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="VIKRANTH" variant="borderless" className="card">
        <div className="curd">
        <h5>ReactJS Certification Training</h5>
        <Rate allowHalf defaultValue={2.5} /> 
        <p className="paragraph">I enrolled for Angular and React js training session conducted by AchieversIT ,It was a great learning experience and wonderful training sessions From Mr Murali and Muniraj. I’m enlightened with the quality and process they delivered. Their exceptional teaching has gained me great confidence to kick start my career to next level. Overall, it was a tremendous knowledge transfer experience. Once again, I thank him for their continuous support, patience, timely help. I.</p>
        
        </div>
      </Card>
    </Col>
  </Row>
</div>

            </Carousel>
            <br>
            </br>
            <br>
            </br>
            <div className="thr">
                <a href="#">View Reviews </a>
            </div>
            </div>
            
                
    
    );
}
export default Reviews;