import React from "react";
import'./Achivers.css'
import { CheckOutlined,LineChartOutlined,ClockCircleOutlined,ReloadOutlined } from "@ant-design/icons";
const Achivers= ()=>{
return(
    <div className="display">


<div class="card" id="gg">
  <div class="card-icon">
  <CheckOutlined  className="sudeer"/> 
  </div>
  <div class="card-content">
    <h3>Real Time Resolution</h3>
    <p>With Live Instructors</p>
  </div>
</div>
<div class="card">
  <div class="card-icon">
  <ReloadOutlined />
  </div>
  <div class="card-content">
    <h3>Real Time Resolution</h3>
    <p>With Live Instructors</p>
  </div>
</div>
<div class="card" id="gj">
  <div class="card-icon">
  <ClockCircleOutlined />
  </div>
  <div class="card-content">
    <h3>Real Time Resolution</h3>
    <p>With Live Instructors</p>
  </div>
</div>
<div class="card" >
  <div class="card-icon">
  <LineChartOutlined  className="shuld"/> 
  </div>
  <div class="card-content">
    <h3>Real Time Resolution</h3>
    <p>With Live Instructors</p>
  </div>
</div>

    </div>
);
}
export default Achivers;