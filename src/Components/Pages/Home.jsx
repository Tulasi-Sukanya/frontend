import React,{useState} from 'react'
import '../../Styles/Home.css'
import { Link, NavLink } from 'react-router-dom'
import Typewriter from "typewriter-effect"
import HomePagepart2 from './HomePagepart2'
import Footer from '../Layout/Footer'

const Home = () => {
  // popup of download placement report
  const [toggle,setToggle] =useState(false);
  const openPopUp=()=>{
      setToggle(true)
  }
  const closePopUp=()=>{
      setToggle(false)
  }
  return (
    <>
    {/* navbar */}
    <div className='position-sticky align-top h-0 header'>
        <div className='navbar'>
            <div className='navbar-content'>
                <div className='header-container'>
                    <div className='hamburger-container'>
                        <div className='stick stick-1 close'></div>
                        <div className='stick stick-2 close'></div>
                        <div className='stick stick-3 close'></div>
                    </div>
                    <div className='main-logo offset-2'>
                            <img src="https://files.codingninjas.in/logo_variants-white-25005.png" alt="error" />
                    </div>
                    <div className='header-content-middle'>
                        <ul className='menu-items  col-5'>
                            <li className='menu-item course-dropdown'>Courses<img src="https://files.codingninjas.in/path-9515.svg" alt="error" /></li>
                            <NavLink to="/scholarship" style={{textDecoration:"none"}}><li className='menu-item scholarship'>Scholarship
                            <span className='ml-4 border-radius-4 green-tag'>UPTO 100% OFF</span>
                            </li></NavLink>
                            <li className='menu-item community-dropdown'>
                                Community<img src="https://files.codingninjas.in/path-9515.svg" alt="error" />
                            </li>
                            <li className='menu-item practice-dropdown'>
                                Practice<img src="https://files.codingninjas.in/path-9515.svg" alt="error" />
                            </li>
                            <li className='menu-item career-code-camp'><img src="https://files.codingninjas.in/careercamp-12614.svg" alt="error" />
                            <span className='new'>New</span>
                            </li>
                        </ul>
                    </div>
                    <div className='header-right-content col-4'>
                        {/* <div className='align-items-center mr-10'></div> */}
                        <div className='buttons'>
                            <button className='login'>Login</button>
                            <button className='enroll'>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className='home-section'>
    <div className='home-container'>
        <div className='intro-container'>
            <div className='intro-content-container d-flex flex-column align-strech pt-0'>
                <div className='intro-container-inner part-1 col-12'>
                    <div className='intro-head py-16'>
                        <div className='intro-text-move' style={{color:"white",fontSize:'30px'}}>
                            <Typewriter options={{ 
                                strings: [ "Chasing Jobs? Let the jobs chase you.","World has enough coders","Be more than a coder"],autoStart: true,loop: true,typeSpeed: 150,backSpeed: 100,}} />
                        </div>
                        <h1 className='codingninjas'>Be a Coding Ninja</h1><br/>
                        <div className='intro-num-students'>50,000 Students from 300 colleges have trusted us</div>
                        <div className='button-explore'>
                        <button>Explore Our Programs</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='intro-container-inner part-2 '>
        <img src="https://files.codingninjas.in/438375-17407.webp" alt="error" className='mascot-image' style={{height:"355px",width:"418px",padding:"0px",marginTop:"-145px"}}/>
    </div>
    </section>
    <section className='box-section'>
        <div className='intro-box-container mx-16'>
            <div className='box-container'>
                <div className='box-heading'>
                    If you have the courage and the commitment to learn coding,then Coding Ninjas will empower you.
                </div>
                <div className='box-subheading'>NO MATTER WHAT IT TAKES!</div>
                <div className='box-points'>
                    <div className='box-point'>
                        <div><img src="https://files.codingninjas.in/boxicon1-9659.svg" alt="error" /></div>

                        <div>Content designed by IIT & stanford alumni</div>
                    </div>
                    <div className='box-point'>
                        <div><img src="https://files.codingninjas.in/boxicon2-9658.svg" alt="error" /></div>
                    <div>Instant 1:1 doubt resolution</div>
                    </div>
                    <div className='box-point'>
                        <div><img src="https://files.codingninjas.in/boxicon3-9657.svg" alt="error" /></div>
                    <div>Practical learning with 100+ problems & 10+ projects in each course</div>
                     </div>
                </div>
            </div>
            <div id="coding-ninjas-chatbot">
                <img src="https://www.codingninjas.com/jivosite/images/jivo_widget_online.png" className="chatbot" alt="message"/>
            </div>
        </div>    
    </section><br/><br/><br/><br/><br/>
    <section>
       <div className="image-accordian-container">
        <div className="section-head-title">
            <h2 className='section-title'>14,000+ Coding Ninjas to Inspire you</h2>
        </div>
        <div className="image-accordian-Page">
            <div className="container-page">
                <div className="container-child slide1">
                    <h4>CS novice to Google</h4>
                    <p className="flex-hidden-content">Despite being from a tier 3 college, I would like to thank my mentors & teachers at Coding Ninjas who helped me land a job at Google. Both Parikh sir and Ankush sir are brilliant teachers who know how to explain difficult concepts in an easy way.</p>
                    <div className="flex-hidden-content">Pareksha Manchanda</div>
                    <div className="flex-hidden-content">Software Engineer</div><br/>
                    <img className="flex-hidden-content" src="https://files.codingninjas.com/google-12193.png" width={70} height={40}alt="404 Error"/>
                </div>
                <div className="container-child slide2">
                <h4>College dropout to a package of 10 LPA</h4>
                    <p className="flex-hidden-content">The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank and technical interview rounds. The placement team coordinated everything perfectly and it was unbelievable to get an offer letter of 10 LPA. Grateful to Coding Ninjas.</p>
                    <div className="flex-hidden-content">Harsh Agrawal</div>
                    <div className="flex-hidden-content">Software Engineer</div><br/>
                    <img className="flex-hidden-content" src="https://files.codingninjas.com/avalara-10511.png" width={70} height={40}alt="404 Error"/>
                </div>
                <div className="container-child slide3">
                <h4>Non-CS branch to Top Company</h4>
                    <p className="flex-hidden-content">My experience with Coding Ninjas was wonderful. The courses strengthened my concepts and helped me in my interviews. The faculty was amazing. I would definitely recommend Coding Ninjas.</p>
                    <div className="flex-hidden-content">Satwika Bhattacharjee</div>
                    <div className="flex-hidden-content">Analyst</div><br/>
                    <img className="flex-hidden-content" src="https://files.codingninjas.in/goldman-sachs-9763.svg" width={70} height={40}alt="404 Error" />
                </div>
                <div className="container-child slide4">
                    <h4>Tier-3 college to 6 stars on CodeChef</h4>
                    <p className="flex-hidden-content">It has been a crazy ride from being a novice CS student to a 6 star Coder and ICPC Regionalist. I would like to thank Coding Ninjas for helping a Tier-3 college student explore such opportunities.</p>
                    <div className="flex-hidden-content">Rahul Lather</div>
                    <div className="flex-hidden-content">Member of Technical Staff</div><br/>
                    <img className="flex-hidden-content" src="https://files.codingninjas.com/cn-logo-12194.png" width={70} height={40}alt="404 Error"/>
                    </div>
                <div className="container-child slide5">
                <h4>Non Engineer to Investment Bank</h4>
                    <p className="flex-hidden-content">Coding Ninjas is one of the best learning platforms. I enrolled into C++ Foundation with Data Structures. The course content was very informative and well structured. The way Ankush Sir and Nidhi Ma'am explain a topic is commendable. My approach towards solving a problem completely changed.</p>
                    <div className="flex-hidden-content">Richa Sharma</div>
                    <div className="flex-hidden-content">SEP Intern</div><br/>
                    <img className="flex-hidden-content" src="https://files.codingninjas.com/jp-morgan-chase-10959.png" width={70} height={40}alt="404 Error"/>
                </div>
            </div>
        </div><br/>
        <Link to="https://www.codingninjas.com/our-students"><button id="alumini-btn">Here more stories from Alumni</button></Link>
       </div>
    </section>
    <br/>
    <section className='why-join-us-container'>
    <div id="media-responsive-why-join-us">
      <div className="Why-to-join-us">
        <div className="join-Page1">
          <button className="join-btn">Why Join Us?</button>
          <h2 className="content">Great students deserve the best jobs</h2>
          <div className='below-content'>Coding Ninjas Makes it Happen...</div>
        </div>
        <div className="join-Page2">
          <div className="hexagons-top">
            <div className="hexagon-box1">
              <div className="num-content">150+</div>
              <div className="alpha-content">Students working in FAANG</div>
            </div>
            <div className="hexagon-box1">
              <div className="num-content">10</div>
              <div className="alpha-content">Students started their own companies</div>
            </div>
          </div>
          <div className="hexagons-bottom">
            <div className="hexagon-box2">
              <div className="num-content">50+</div>
              <div className="alpha-content">Students having 5 Stars on CodeChef</div>
            </div>
            <div className="hexagon-box2">
              <div className="num-content">100+</div>
              <div className="alpha-content">Students received International Job Offers</div>
            </div>
          </div>
        </div>
      </div>

      <div id="students-placed">Our students are placed at</div>
      <div className="company-tie-ups">
        <img src="https://files.codingninjas.in/google-9542.svg" alt="404 Error" className="company-media-responsive" />
        <img src="https://files.codingninjas.in/microsoft-9541.svg" alt="404 Error" className="company-media-responsive" />
        <img src="https://files.codingninjas.in/adobe-9540.svg" alt="404 Error" className="company-media-responsive" />
        <img src="https://files.codingninjas.in/walmart-9539.svg" alt="404 Error" className="company-media-responsive" />
        <img src="https://files.codingninjas.in/amazon-9538.svg" alt="404 Error" className="company-media-responsive" />
        <img src="https://files.codingninjas.in/oyo-9537.svg" alt="404 Error" className="company-media-responsive"/>
        <img src="https://files.codingninjas.in/flipkart-9536.svg" alt="404 Error" className="company-media-responsive" />
        <img src="https://files.codingninjas.in/morganstanley-9535.svg" alt="404 Error" className="company-media-responsive" />
        <img src="https://files.codingninjas.in/samsung-9534.svg" alt="404 Error" className="company-media-responsive" />
        <img src="https://files.codingninjas.in/expedia-9533.svg" alt="404 Error"className="company-media-responsive" />
        <img src="https://files.codingninjas.in/facebook-9532.svg" alt="404 Error" className="company-media-responsive" />
      </div>
      <div className="report-btn">
        <button className="placement-report-btn" onClick={openPopUp}>Download Placement Reports</button>
      </div>
      {toggle && <div id="popup-box">
          <div className="title-head">
            <h2>Download Placement report</h2>
            <div className="close-popup" onClick={closePopUp}>x</div>
          </div>
          <div className="main-form">
            <form className="placement-report-form">
                 <div className="form-title">Fill in details below</div>
                 <input type="text" placeholder="Full Name"/>
                 <input type="email" placeholder="Email Address"/>
                 <input type="number" placeholder="Phone Number"/>
                 <button className="download-report" disabled>Download Placement report</button>
            </form>
          </div>
      </div>}
      </div>
    </section>
    <br/>
    <section>
    <div id="rating-page">
        <div id="rating-page-container">
          <div className="rating-child-container">
            <div className="rating">4.9</div>
            <img className="five-Star" src="https://files.codingninjas.in/stars-9613.svg" alt="404 Error" height={30} width={170} style={{marginLeft:"25%"}} />
            <div>100+ reviews</div>
            <img className="five-Star" src="https://files.codingninjas.in/fblogo-9599.svg" alt="404 Error" height={44} width={172} style={{marginLeft:"25%"}} />
          </div>

          <div className="rating-child-container">
           <div className="rating">4.8</div>
            <img className="five-Star" src="https://files.codingninjas.in/stars-9613.svg" alt="404 Error" height={30} width={170} style={{marginLeft:"25%"}} />
            <div>1000+ reviews</div>
            <img className="five-Star" src="https://files.codingninjas.in/glogo-9600.svg" alt="404 Error" height={44} width={172} style={{marginLeft:"25%"}} />
          </div>

          <div className="rating-child-container end">
              <div className="rating">50+</div>
              <div>Questions asked</div>
              <div>5000 answered</div>
              <img className="five-Star" src="https://files.codingninjas.in/qlogo-9611.svg" alt="404 Error" height={44} width={172} style={{marginLeft:"25%"}} />
            </div>
          </div>
        </div>
    </section>
    <HomePagepart2 />
    <br/><br/><br/>
    <Footer />
    </>
  )
}

export default Home

