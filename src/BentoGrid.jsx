import React from 'react';
import './BentoGrid.css'; // Ensure this matches your CSS file name

function BentoGrid() {
  return (
    <>
      <div className="grid-container">
       
        {/* --- Box 1 (Video) --- */}
        <div className="box box-1">
          {/* Note: For files in the public folder, use the root path '/' */}
          <video 
            src="/vid1.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          <h1>CRAFTING THE CODE FOR YOUR NEXT CHAPTER</h1>
        </div>

        {/* --- Box 2 (Profile) --- */}
        <div className="box box-2">
          <div className="hover-text">explore my digital world</div>
          {/* <div className="box2-text">Hey i'm KAUSHIK</div> */}
        </div>
       
        {/* --- Box 3 (Skills) --- */}
        <div className="box box-3">
          <span className="title">skill</span>
          <ul>
            <li>WEB Development</li>
            <li>REACT</li>
            <li>JAVASCRIPT</li>
            <li>PYTHON</li>
            <li>Django</li>
          </ul>
        </div>

        {/* --- Box 4 (Projects) --- */}
        <div className="box box-4">
          <span className="title">project</span>
          <div className="project-grid">
            <div className="project-item" style={{ backgroundImage: `url('/pro1.png')` }}></div>
            <div className="project-item" style={{ backgroundImage: `url('/pro2.png')` }}></div>
            <div className="project-item" style={{ backgroundImage: `url('/pro3.jpg')` }}></div>
            <div className="project-item" style={{ backgroundImage: `url('/pro4.jpeg')` }}></div>
          </div>
          <div className="arrow">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        {/* --- Box 5 (Hello) --- */}
        <div className="box box-5">
          <img src="https://media.tenor.com/InfbZnZgATIAAAAi/hand-gif.gif" alt="Waving hand" />
          <span>hello i'm KAUSHIK</span>
        </div>

        {/* --- Box 6 (Contact) --- */}
        <a href="https://wa.me/7477310465?text=<hello kauhsik/>" target="_blank" className="box box-6">
          <span className="contact-pill">
            Contact Me
            <span className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </span>
        </a>

        {/* --- BOX 9 (NEW: Download CV) --- */}
        {/* This box is positioned by the CSS Grid layout */}
        <a href="/kaushik-cv.pdf" download="Kaushik_CV" className="box box-9">
          <span className="cv-pill">
            Download CV
            <i className="fa-solid fa-download"></i>
          </span>
        </a>

        {/* --- Box 7 (Icons) --- */}
        <div className="box box-7">
          <div className="icon-grid">
            <a href="https://github.com/kaushik7477" target="_blank">
            <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kaushik-halder-a58931263/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://wa.me/7477310465?text=<hello kauhsik/>" target="_blank">
            <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="mailto:this.kaushik@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="tel:+4733378901" target="_blank">
            <i className="fa-solid fa-phone"></i>
            </a>
            <a href="https://github.com/kaushik7477" target="_blank">
            <i className="fa-brands fa-google"></i>
            </a>
          </div>
        </div>

        {/* --- Box 8 (Links) --- */}
        <div className="box box-8">
          <a href="https://kaushik.com" target="_blank" rel="noopener noreferrer" className="info-link">
            <i className="fa-solid fa-globe"></i>
            <span>kaushik.com</span>
          </a>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="info-link">
            <i className="fa-solid fa-location-dot"></i>
            <span>My Location</span>
          </a>
        </div>
        
        <div className="all-color"></div>
      </div>
    </>
  );
}

export default BentoGrid;