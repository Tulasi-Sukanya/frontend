import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {FiAlignJustify} from "react-icons/fi"
import '../../Styles/scholarshipstyles.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Scholarship = () => {
  const items=[
    {
      "id":"1",
      "heading":"How much is the Registration Fee for Coding Ninjas Scholarship Test?",
      "content":"The Registration is free for the Coding Ninjas Scholarship Tesdt.",
    },
    {
      "id":"2",
      "heading":"When will the Coding Ninjas Scholarship Test June'23 results be announced?",
      "content":"The results will be announced instantly after test completion.",
    },
    {
      "id":"3",
      "heading":"Will i need a Login and Password to attempt the coding Ninjas Scholarship Test?",
      "content":"No,your account will automatically be created with email ID,and make sure you use the same email ID and attempt the test.",
    },
    {
      "id":"4",
      "heading":"If i dont qualify for the exam, i wont get any scholarship?",
      "content":"To Encourage students to participate in the test and make sure that each student is entitled with a reward we offering a minimum scholarship of 10%.Participating is more important than winning.",
    },
    {
      "id":"5",
      "heading":"Does Coding Ninjas Provide financial aid?",
      "content":"To encourage,reward,and financially assist worthy students.Coding Ninjas is offering a Scholarship test from 13th to 14th June 2023 in which students will get a minimum scholarship of 10%.The test will consist of 15 Aptitude based 15-MCQs.",
    }

  ]
  return (
    <>
        <header>
        <nav className="navbar navbar-expand-lg bg-body-#032D6B">
          <Link className="navbar-brand offset-1" to="/">
            <img src="https://files.codingninjas.in/logo_variants-white-25005.png" alt='error' style={{height:"24%",width:"24%"}} />
          </Link>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><FiAlignJustify/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link">Test HighLights</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Our Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">FAQs</NavLink>
        </li>
      </ul>
    </div>&nbsp;&nbsp;&nbsp;
    <button className='scholarship-register-button'>Why Register?</button>
    <span className='offset-1'></span>
  </div>
</nav>
</header>
<section className='elementor-section elementor-top-section'>
  <div className='elementor-colmun elementor'>
    <div className='elementor-widget-wrap'>
      <div className='elements'>
        <img src="https://www.codingninjas.com/landing/wp-content/uploads/2023/03/CNSAT-2-300x100.png" alt="error" style={{backgroundColor:"black"}}/><br/><br/>
        <h2>Participate and get</h2>
        <h3>UPTO 100% Scholarship</h3>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg> */}
        <h2>on any course by Coding Ninjas</h2><br />
        <span>*Applicable on only non-career camp courses</span><br /><br /><br />
          <span className='sub-li'>13th to 14th June'23</span><br/>
          <span className='sub-li'>Results will be announced instantly after test completion</span><br/><br/>
        <button className='register-btn'>Register Now</button>
      </div>
    </div>
  </div>
  <div className='elementor-image'>
    <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/ankush-sir-pic-03-03-03-1.png" alt="error" />
  </div>
</section>
{/* // */}
<section className='elementor-section-test-highlights'>
  <div className='elementor-test-container column-gap-default col-12'>
  <div className='element1 col-3'>
      <h2 className='heading'>Test Highlights</h2>
  </div>
  <div className='element col-2.5'>
      <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/last-icon-14.png" alt="error" />
      <span style={{color:"#fff"}}>15 Aptitude Based MCQs</span>
  </div>
  <div className='element col-2.5'>
    <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/last-icon-15.png" alt="error" />
    <span style={{color:"#fff"}}>2 Days Window to attempt</span>
  </div>
  <div className='element col-2.5'>
    <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/last-icon-16.png" alt="error" />
    <span style={{color:"#fff"}}>No Negative Marking</span>
  </div>
  </div>
</section>
<br/>
{/* /// */}
<div className='section-heading'>
    <h2 style={{textAlign:"center"}}>Scholarship Brackets</h2>
  </div><br />
<section className='progress-bar-container'>
  <div className='top-10 progressbar col-5'>
  <div className="scholarship-container ">
       <div className="progress_bar">
        <h2>100% Scholarship</h2>
        <div className="Progress_line">
          <h2>Top 10</h2>
        </div>
      </div>
    </div><br/>
  </div>
  <div className='progressbar-container col-5'>
   <div className='scholarship-container'>
   <div className="scholarship">
      <div className="progress_bar">
        <h2>50% Scholarship</h2>
        <div className="Progress_line"><h2>Top 10%</h2></div>
      </div>
    </div><br/>
    <div className="scholarship">
      <div className="progress_bar">
      <h2>45% Scholarship</h2>
        <div className="Progress_line"><h2>Top 10-20%</h2></div>
      </div>
    </div><br/>
    <div className="scholarship">
      <div className="progress_bar">
      <h2>40% Scholarship</h2>
        <div className="Progress_line"><h2>Top 20-35%</h2></div>
      </div>
    </div><br/>
    <div className="scholarship">
      <div className="progress_bar">
      <h2>35% Scholarship</h2>
        <div className="Progress_line"><h2>Top 35-50%</h2></div>
      </div>
    </div><br/>
    <div className="scholarship">
      <div className="progress_bar">
      <h2>30% Scholarship</h2>
        <div className="Progress_line"><h2>Top 50-60%</h2></div>
      </div>
    </div><br/>
    <div className="scholarship">
      <div className="progress_bar">
      <h2>25% Scholarship</h2>
        <div className="Progress_line"><h2>Top 60-70%</h2></div>
      </div>
    </div><br/>
    <div className="scholarship">
      <div className="progress_bar">
      <h2>20% Scholarship</h2>
        <div className="Progress_line"><h2>Top 70-80%</h2></div>
      </div>
    </div><br/>
    <div className="scholarship">
      <div className="progress_bar">
      <h2>10% Scholarship</h2>
        <div className="Progress_line"><h2>Bottom 20%</h2></div>
      </div>
    </div><br/>
   </div>
  </div>
</section>
<br/>
<section className='elementor-placement-record'>
  <div className='placement-content'>
  <div className='placement-heading'>
    <h2>We Have the best placement Record</h2>
  </div>
  <br/>
  <div className='placement-sub-heading'>
    <h2>You can be next to work in your dream company</h2>
  </div>
  <div className='companies'>
    
  </div>
  </div>
</section>
{/* /// */}
<br/>
<section className='cnsat-container'>
  <div className='cnsat-content offset-1'>
    <h2>Take The First Step</h2><br/>
    <p>towards your Dream Job,Participate in CNSAT and get upto 100% Scholarship on any course by Coding Ninjas</p><br />
    <button>Register For CNSAT</button>
  </div>
  <div className='cnsat-image offset-1'>
    <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/student--1024x459.png" alt="error" />
  </div>
</section><br /><br/>
<section className='popular-courses'>
<h2 className='courses-title'>Popular Courses we offer</h2><br />
  <div className='courses'>
  <main className='py-3'>
      <div className='courses-container-middle'>
        <div className='row'>
          <div className='col-3'>
           <h2 className='text-white mb-4 course'>Data Structures<br /> & Algorithms</h2>
              <div className='buttons text-white d-flex gap-10'>
              <div className="courses-buttons">
                <ul className="list-buttons">
                 <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/icon-09-min-1536x445.png" alt="error" />
                 <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/icon-10-min-1024x296.png" alt="error" />
                 <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/icon-11-min-1536x444.png" alt="error" />
                </ul>
              </div>
              </div>
          </div>
          <div className='col-3'>
            <h2 className='text-white mb-4 course'>Analytics &<br/> Data Science</h2>
            <div className='footer-links d-flex flex-column'>
              <ul className='list-buttons'>
              <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/icon-16-min-1536x445.png" alt="error" />
              <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/icon-15-min-1536x445.png" alt="error" />    
              </ul>          
            </div>
          </div>
          <div className='col-3'>
            <h2 className='text-white mb-4 course'>Web <br/>Devolopment</h2>
            <div className='footer-links d-flex flex-column web'>
            <ul className='list-buttons'>
            <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/icon-12-min-1024x296.png" alt="error"  />
            <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/icon-13-min-1536x445.png" alt="error" />   
            </ul>
            </div>
          </div>
          <div className='col-3'>
            <h2 className='text-white mb-4 course'>Other Popular<br/> Courses</h2>
            <div className='footer-links d-flex flex-column'>
            <ul className='list-buttons'>
            <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/icon-18-min-1536x445.png" alt="error" />
            <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/icon-20-min-1024x296.png" alt="error" />
            <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/icon-19-min-1536x445.png" alt="error" />
            </ul>
          </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</section>
<br/>
<section className='participation-container'>
  <div className='participate'>
    <h2>Participate in CNSAT & Get</h2><br/>

    <span><i aria-hidden="true" class="fas fa-laptop-code"></i><Link to="/" style={{textDecoration:"none", color:"#032D6B"}}>FREE Aceess to MAANG Test Series</Link></span><br/>

    <span><Link to="/" style={{textDecoration:"none", color:"#032D6B"}}><i aria-hidden="true" class="fas fa-trophy"></i>Training Certificates</Link></span><br/>

    <span><Link to="/" style={{textDecoration:"none", color:"#032D6B"}}><i aria-hidden="true" class="fas fa-gifts"></i>Coding Ninjas Swags</Link></span><br/><br/>

    <span className='terms'>*Applicable only on course purchase</span><br/><br/>
    <button>Register For CNSAT</button>
  </div>
  <div className='offset-4 participation-image'>
    <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/GOODIES-12-1-1536x1414.png" alt="error" />
  </div>
</section>
<section className='Faq-container'>
  <div className='Faq-content'>
    <h2>FAQs</h2>
  <Accordion allowZeroExpanded>
    {items.map((item) => (
        <AccordionItem key={item.id}>
            <AccordionItemHeading>
                <AccordionItemButton style={{alignContent:"end"}}>
                    <font>{item.heading}</font>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <font>{item.content}</font>
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>

  </div>
</section>
<footer>
  <div className='footer-logo col-6'>
    <img src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/iicc-logo-09-1536x535.png" alt="error" />&nbsp;&nbsp;&nbsp;
  </div>
  <div className='footer-content offset-2 col-4'>
    <Link to="https://www.codingninjas.com/policy/privacy.pdf"><span className='policy' style={{textDecoration:"none",}}>Privacy Policy</span><br/></Link>
    <h2 className="copyright">Copyright © Sunrise Mentors Pvt. Ltd.</h2>
  </div>
</footer>
</>
  )
}

export default Scholarship