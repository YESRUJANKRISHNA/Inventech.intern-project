import React from "react";
import'./Footer.css'
import { PhoneOutlined,MailOutlined,AlertOutlined,YoutubeOutlined,FacebookOutlined,TwitterOutlined,LinkedinOutlined,WhatsAppOutlined } from "@ant-design/icons";
const Footer=()=>{
    return(
        <div className="footer">
            <div className="lk">
                <div className="inven">
                    <a href='/'><img className='image' src="/images/invens.png" id="fg"/>
          </a>
                    <p className="pars">InvenIT - Provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.</p>
                </div>
                <div className="inven" id="er">
                    <h4 className="par">Company</h4>
                    <ul>
                        <li className="par">
                        Home 
                        </li  >
                        <li className="par">Placements</li>
                        <li className="par">Corporate Training</li>
                        <li className="par">Contact US</li>
                    </ul>
                </div>
                <div className="inven">
                    <h4 className="par" >TRENDING COURSES</h4>
                    <ul>
                        <li className="par">
                        UI Development Course 
                        </li  >
                        <li className="par">Angular JS Course</li>
                        <li className="par">React JS Course</li>
                        <li className="par">Digital Marketing Course</li>
                        <li className="par">Python Course</li>
                    </ul>
                </div>
                <div className="inven">
                <h4 className="par" >Contact Info</h4>
                    <ul>
                        <li className="par">
                        <AlertOutlined />  #63, 1st Floor, 16th  Stage, Bangalore, India - 560029
                        </li  >
                        <li className="par"> <PhoneOutlined /> India : +91 8431-040-457</li>
                        
                        
                        <li className="par"> <MailOutlined /> info@achieversit.com</li>
                        
                    </ul>
                    
                </div>
            
            </div>
        
            
            <hr></hr>
            <div className="hjk">
            <YoutubeOutlined className="sc" />
            <WhatsAppOutlined className="sc"/>
            <TwitterOutlined  className="sc"/>
            <LinkedinOutlined className="sc" />
            <FacebookOutlined  className="sc"/>
            </div>
            
            
        </div>
    );
}
export default Footer;