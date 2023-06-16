import React from "react";
import { useNavigate } from "react-router-dom";


const BoxCourseLayout = ({data}) => {
  const navigate=useNavigate();

  const dataHandler=(data)=>{
    navigate(`/User/Course/${data.course}`, { state: { data } });
  }
  return (
    <div className="BoxCourse-HomePagepart2" onClick={()=>dataHandler(data)}>
      <div className="BoxCourse-inner-Box-top">
        <div className="inner-box">
          {/* <div className="inner-box-head-text1">{data.h1}</div> */}
          <div className="inner-box-Subhead-text2">{data.h2}</div>
        </div>
        <img src={data.url} alt="Course-Name"/>
      </div>
      <div className="BoxCourse-inner-Box-bottom">
        <div className="inner-Box-bottom">
            <div className="inner-Box-bottom-row">
                <img src="https://files.codingninjas.in/vector-1-19336.svg" alt="Error"/>
                140+ Hours 
                <img src="https://files.codingninjas.in/mdi_palette-swatch-19337.svg" alt="Error"/>
                6+ Projects 
            </div>
            <div className="inner-Box-bottom-row">4.8<img src="https://files.codingninjas.in/4-8-stars-5588.png"width={80} alt="404_Error"/>(2K+ Students)</div>
        </div>
      </div>
    </div>
  );
};
export default BoxCourseLayout;










