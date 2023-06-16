import React from "react";

const Slide = ({title,subTitle,para,para1,list,review,url,btn}) => {
    return (
      <div id="effect-onClick">
        <div id="containerpage-nav-click-content">
          <div className="sub-containerpage-click">
            <div className="a4-page-one">{title}</div>
            <div className="a4-page-two">
              {subTitle}
            </div>
            <div className="a4-page-three">
              {para}
            </div>
            <div className="a4-page-three">
              {para1}
            </div>
           {list=="yes" ?
              <div>
              <div className="a4-page-four">
                <img
                  src="https://files.codingninjas.in/tick-9614.svg"
                  alt="404 Error"
                />
                <div>Very short learning videos: 10-15 minutes</div>
              </div>
              <div className="a4-page-four">
                <img
                  src="https://files.codingninjas.in/tick-9614.svg"
                  alt="404 Error"
                />
                <div>
                  2-3 Guided Problems & 5-10 practice problems to understand: 45
                  minutes
                </div>
              </div>
              <div className="a4-page-four">
                <img
                  src="https://files.codingninjas.in/tick-9614.svg"
                  alt="404 Error"
                />
                <div>
                  Doubts resolved instantly by our Teaching Assitants and Notes
                  for Revision
                </div>
              </div>
            </div>:""
           }
            <div className="parentpage-sub">
              <div className="childpage-sub">
                <div className="childpage-font-big">{review.one[0]}</div>
                <div className="short-width-page">
                  {review.one[1]}
                </div>
              </div>
              <div className="childpage-sub">
                <div className="childpage-font-big">{review.two[0]}</div>
                <div className="short-width-page">
                  {review.two[1]}
                </div>
              </div>
              <div className="childpage-sub">
                <div className="childpage-font-big">{review.three[0]}</div>
                <div className="short-width-page">{review.three[1]}</div>
              </div>
            </div>
            {btn==="yes" && <button className="btn-Nav-entroll"><a href="https://www.codingninjas.com/services/interview-sessions" style={{textDecoration:"none",color:"white"}}>Know More</a></button>}
          </div>
  
          <img id="img-slide"src={url} alt="404 Error" />
        </div>
      </div>
    );
  };
  export default Slide;