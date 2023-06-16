import CourseMapping from "./CourseMapping"
// import NavBar from "../Components/NavBar.jsx";
import Footer from '../Layout/Footer';
// import FifthPage from '../Common/FifthPage.jsx';
import {useEffect} from 'react';
import { useParams,useLocation } from 'react-router-dom';
import '../../Styles/Course.css'

const Course = () => {
    const params=useParams();
    const location=useLocation();
    console.log(params)
    const state=location.state.data;
    useEffect(()=>{

    },[state])
  return (
    <div className="whole-container-course">
      <div className="Course-nav-page">
        {/* <NavBar /> */}
      </div>
      <CourseMapping data={state}/>

      <div style={{color:"black"}} className="media-fifth-page-course">
      {/* <FifthPage/> */}
      </div>
      <div className="footer-media-course-page">
      <Footer/>
      </div>
    </div>
  );
};
export default Course;