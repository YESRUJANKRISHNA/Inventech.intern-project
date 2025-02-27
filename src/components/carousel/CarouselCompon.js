

import React from 'react';
import { Carousel } from 'antd';
import'./CarouselCompon.css'
 
 

const contentStyle = {
  position: 'absolute',
  top: '50%',  
  left: '60%',
  bottom:'10%', 
  transform: 'translate(-50%, -50%)',  
  color: '#fff',
   
  padding: '20px',
  borderRadius: '5px',
  textAlign: 'center',
  width: '80%', 
};
 
const textStyle = {
  fontSize: '2rem', 
  marginBottom: '10px', 
};
 
const buttonStyle = {
  fontSize: '14px',
  backgroundColor: '#ff5722',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
};
 
const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log('Current Slide:', currentSlide);
  };
 
  return (
<Carousel
      afterChange={onChange}
      autoplay 
      autoplaySpeed={1500} 
      effect="fade" 
>
      
<div>
<img
          src="https://www.achieversit.com/assets/images/angular_training.jpg"
          alt="Angular Development"
          style={{ width: '100%', height: 'auto' }}
        />
<div style={contentStyle}>
<h3 style={textStyle}>ANGULAR DEVELOPMENT COURSE</h3>
<a
            href="angular-training-course-institute-in-bangalore"
            style={buttonStyle}
>
            EXPLORE COURSE
</a>
</div>
</div>
 
<div>
<img
          src="https://www.achieversit.com/assets/images/react_training.jpg"
          alt="ReactJS Development"
          style={{ width: '100%', height: 'auto' }}
        />
<div style={contentStyle}>
<h3 style={textStyle}>REACTJS DEVELOPMENT COURSE</h3>
<a
            href="react-training-training-course-institute-in-bangalore"
            style={buttonStyle}
>
            EXPLORE COURSE
</a>
</div>
</div>
 
    
<div>
<img
          src="https://www.achieversit.com/assets/images/full_stack_development.jpg"
          alt="Full Stack Development"
          style={{ width: '100%', height: 'auto' }}
        />
<div style={contentStyle}>
<h3 style={textStyle}>FULL STACK DEVELOPMENT COURSE</h3>
<a
            href="full-stack-training-course-in-bangalore"
            style={buttonStyle}
>
            EXPLORE COURSE
</a>
</div>
</div>
 
      {/* Carousel Item 4 */}
<div>
<img
          src="https://www.achieversit.com/assets/images/aws_training.jpg"
          alt="AWS Development"
          style={{ width: '100%', height: 'auto' }}
        />
<div style={contentStyle}>
<h3 style={textStyle}>AMAZON WEB SERVICES COURSE</h3>
<a
            href="digital-marketing-training-course-in-bangalore"
            style={buttonStyle}
>
            EXPLORE COURSE
</a>
</div>
</div>
</Carousel>
  );
};
 
export default CarouselComponent;





