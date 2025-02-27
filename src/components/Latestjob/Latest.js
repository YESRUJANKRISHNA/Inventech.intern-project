import React from "react";
import { useState } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import './Latest.css';

import { DownOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
const Latest = () => {

    const [flag1, setflag1] = React.useState(false)
    const [flag2, setflag2] = React.useState(false)
    const [flag3, setflag3] = React.useState(false)
    const [flag4, setflag4] = React.useState(false)
    const [flag5, setflag5] = React.useState(false)
    const [flag6, setflag6] = React.useState(false)

    return (
        <div className='whole_thing'>
            <div>

            </div>
            <div className='whole_card'>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <div className='outerr' >
                            <div className='inner_content'
                                style={{ backgroundImage: `url(${"./images/srujan.image.jpg"})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <p>
                                    <h1>Front End Developer - Angular js,Nodejs</h1>
                                    <br />
                                    Location : Bangalore
                                </p>

                                <button sytle={{ cursor: "pointer" }} onClick={() => setflag1(!flag1)}><DownOutlined /></button>
                            </div>
                            <span className='scrolled_content'
                            >
                                <div className="vinu">
                                    {flag1 && <ul>
                                        <li>Skill set :</li>
                                        <li>Experience : 4 to 10 years.</li>
                                        <li>Desired Candidate Profile :</li>
                                        <li>Roles and Responsibilities :
                                            <p>A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. have to supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developer...</p>
                                        </li>
                                    </ul>}
                                </div>
                            </span>

                        </div>
                        <div className='outerr'>

                            <div className='inner_content'
                                style={{ backgroundImage: `url(${"./images/srujan.image.jpg"})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <p>
                                    <h1>Senior Software Engineer - Java Full Stack Developer</h1>
                                    Location : Bangalore
                                </p>
                                <button sytle={{ cursor: "pointer" }} onClick={() => setflag2(!flag2)}><DownOutlined /></button>
                            </div>
                            <span className='scrolled_content'>
                                <div className="vinu">
                                    {flag2 && <ul>
                                        <li>Skill set :</li>
                                        <li>Experience : 4 to 10 years.</li>
                                        <li>Desired Candidate Profile :</li>
                                        <li>Roles and Responsibilities :
                                            <p>A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. have to supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developer...</p>
                                        </li>
                                    </ul>}
                                </div>
                            </span>

                        </div>
                        <div className='outerr'>
                            <div className='inner_content'
                                style={{ backgroundImage: `url(${"./images/srujan.image.jpg"})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <p>
                                    <h1>UI Developer - AngularJS Frameworks</h1>
                                    <br />
                                    Location : Bangalore
                                </p>
                                <button sytle={{ cursor: "pointer" }} onClick={() => setflag3(!flag3)}><DownOutlined /></button>
                            </div>
                            <span className='scrolled_content'>
                                <div className="vinu">
                                    {flag3 && <ul>
                                        <li>Skill set :</li>
                                        <li>Experience : 4 to 10 years.</li>
                                        <li>Desired Candidate Profile :</li>
                                        <li>Roles and Responsibilities :
                                            <p>A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. have to supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developer...</p>
                                        </li>
                                    </ul>}
                                </div>
                            </span>
                        </div>
                    </Col>


                    
                    

                    
                    <Col span={12}>
                        <div className='outerr'>
                            <div className='inner_content'
                                style={{ backgroundImage: `url(${"./images/srujan.image.jpg"})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <p>
                                    <h1>.Net senior Developer- 5positions</h1>
                                    <br />
                                    Location : Bangalore
                                </p>
                                <button sytle={{ cursor: "pointer" }} onClick={() => setflag6(!flag6)}><DownOutlined /></button>
                            </div>
                            <span className='scrolled_content'>
                                <div>
                                    {flag6 && <ul>
                                        <li>Skill set :</li>
                                        <li>Experience : 4 to 10 years.</li>
                                        <li>Desired Candidate Profile :</li>
                                        <li>Roles and Responsibilities :
                                            <p>A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. have to supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developer...</p>
                                        </li>
                                    </ul>}
                                </div>
                            </span>
                        </div>
                        <div className='outerr'>
                            <div className='inner_content'
                                style={{ backgroundImage: `url(${"./images/srujan.image.jpg"})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <p>
                                    <h1>UI UX Designer / Developer</h1>
                                    <br />
                                    Location : Bangalore
                                </p>
                                <button sytle={{ cursor: "pointer" }} onClick={() => setflag5(!flag5)}><DownOutlined /></button>
                            </div>
                            <span className='scrolled_content'>
                                <div>
                                    {flag5 && <ul>
                                        <li>Skill set :</li>
                                        <li>Experience : 4 to 10 years.</li>
                                        <li>Desired Candidate Profile :</li>
                                        <li>Roles and Responsibilities :
                                            <p>A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. have to supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developer...</p>
                                        </li>
                                    </ul>}
                                </div>
                            </span>
                        </div>
                        <div className='outerr'>
                            <div className='inner_content'
                                style={{ backgroundImage: `url(${"./images/srujan.image.jpg"})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <p>
                                    <h1>Python Developer ( Fresher ) Requirement.</h1>
                                    <br />
                                    Location : Bangalore
                                </p>
                                <button sytle={{ cursor: "pointer" }} onClick={() => setflag4(!flag4)}><DownOutlined /></button>
                            </div>
                            <span className='scrolled_content'>
                                <div className="vinu">
                                    {flag4 && <ul>
                                        <li>Skill set :</li>
                                        <li>Experience : 4 to 10 years.</li>
                                        <li>Desired Candidate Profile :</li>
                                        <li>Roles and Responsibilities :
                                            <p>A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. have to supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developer...</p>
                                        </li>
                                    </ul>}
                                </div>
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>

    )

}
export default Latest;
