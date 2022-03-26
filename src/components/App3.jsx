import React, {useState, useEffect, useRef} from 'react';
import '../sass/app3/app.scss'

const App3 = () => {
  const menuRef = useRef(null);
  const toggleMenuRef = useRef(null);
  const [menuShowed, setMenuShowed] = useState(false);

  const handleClickOutside = (event) => {
    const { target } = event
    if (!menuRef.current.contains(target) && !toggleMenuRef.current.contains(target)) {
      if(menuShowed) setMenuShowed(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
  })

  useEffect(() => {
    return function cleanup() {
      document.addEventListener('click', handleClickOutside)
    };
  });

  const showMenu = (e) => {
    setMenuShowed(true);
  }
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-top">
          <div className="container">
            <img srcSet="/images/app3/logo.png 2x" alt="" />
            <ul ref={menuRef} className={menuShowed ? 'menu is-active' : 'menu'}>
              <li className="menu-item"><a href="" className="menu-link">Home</a></li>
              <li className="menu-item"><a href="" className="menu-link">Projects</a></li>
              <li className="menu-item"><a href="" className="menu-link">Designers</a></li>
              <li className="menu-item"><a href="" className="menu-link">Articles</a></li>
            </ul>
            <a href="" className="header-contact font-heading">Contact</a>
            <button className="menu-toggle" ref={toggleMenuRef} onClick={(e) => showMenu(e)}>
              <span className='line line-first'></span>
              <span className="line line-second"></span>
            </button>
          </div>
        </div>
        <img srcSet='/images/app3/header-lines.png 2x' />
        <div className="container">
          <div className="header-main">
            <div className='header-content'>
              <h1 className="header-heading font-heading">
                We make <span><span className='header-heading-child'>We </span>every room</span>
                <span><span className='header-heading-child'>We </span>a unique shape</span>
              </h1>
              <div className="header-info">
                <img srcSet="/images/app3/header-line2.png 2x" alt="" />
                <p className="header-text">Lorem ipsum onsectetur adipiscing elit. Blandit mauris etiam faucibus laoreet tellus nam. Gravida solor aenean orci, facilisis senectus.</p>
              </div>
              
            </div>
            <div className='header-images'>
              <img srcSet='/images/app3/img1.png 2x' className='header-img-large' />
              <img srcSet="/images/app3/img2.png 2x" alt="" className="header-img-small" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="about">
          <div className="container">
            <div className="about-header">
              <h2 className="about-heading font-heading g-heading">
                Our remember-able stories
              </h2>
              <p className="g-text about-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mauris etiam faucibus laoreet vestibulum pretium tellus nam. Gravida aenean orci, facilisis senectus.
              </p>
            </div>
            <div className='about-content'>
              <div className='about-left'>
                <img srcSet="/images/app3/img3.png 2x" alt="" />
              </div>
              <div className='about-right'>
                <img srcSet="/images/app3/img4.png 2x" alt="" />
                <img srcSet="/images/app3/line3.png 2x" alt="" />
                <h3 className='font-heading about-caption'>We don’t renovate space, we transform them</h3>
              </div>
            </div>
          </div>
          <div className='about-line'>
            <img srcSet="/images/app3/line4.png 2x" alt="" />
          </div>
        </section>
        <section className="project">
          <div className="container">
            <div className="project-header">
              <h2 className="font-heading project-heading g-heading">Our latest projects</h2>
              <a href="" className="project-all g-link font-heading">All Projects</a>
            </div>
          </div>
          <div className='project-list'>
            <div className="project-item">
              <div className="project-image">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
              <div className='container'>
                <div className="project-info">
                  <h3 className="project-name">Dining Room</h3>
                  <a href="" className="project-link font-heading g-link">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="designer">
          <div className="container">
            <div className="designer-main">
              <div className="designer-content">
                <h2 className="g-heading font-heading designer-heading">
                  Our designers
                </h2>
                <p className="designer-desc g-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mauris etiam faucibus laoreet vestibulum
                </p>

                <p className="designer-desc g-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mauris etiam faucibus laoreet vestibulum nam. Gravida aenean orci, facilisis senectus.
                </p>
                <a href="" className="g-link designer-link font-heading">See All Designers</a>
              </div>
              <div className="designer-image">
                <img srcSet="/images/app3/img5.png 2x" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="container">
            <div className="blog-header">
              <h2 className="g-heading font-heading blog-heading">
                Our latest articles
              </h2>
              <a href="" className="g-link blog-view">
                Read All Articles
              </a>
            </div>
            <div className="blog-list">
              <div className="blog-item">
                <div className="blog-image">
                  <img srcSet="/images/app3/img6.png 2x" alt="" />
                </div>
                <h3 className="blog-title font-heading">Why your client needs interior design</h3>
                <div className="blog-meta">
                  <a href="" className="g-link blog-link">Read More</a>
                  <time className='blog-time'>April 30, 2020</time>
                </div>
              </div>
              <div className="blog-item">
                <div className="blog-image">
                  <img srcSet="/images/app3/img7.png 2x" alt="" />
                </div>
                <h3 className="blog-title font-heading">How to decore your home</h3>
                <div className="blog-meta">
                  <a href="" className="g-link blog-link">Read More</a>
                  <time className='blog-time'>April 30, 2020</time>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <a href="" className="back-to-top font-heading g-link">
            <img src="/images/app3/img-up.svg" alt="" />
            <span>Go to the top</span>
          </a>
          <div className="footer-main">
            <div className="footer-content">
              <h3 className="font-heading footer-heading">Stay in touch with us</h3>
              <div className="footer-info">
                <span className='text-dot'>DM us on:</span>
                <h4 className='footer-info-item font-heading'>hello@heling.com</h4>
              </div>
              <div className="footer-info">
                <span className='text-dot'>Call us on:</span>
                <h4 className='footer-info-item font-heading'>+2(930) 859-464</h4>
              </div>
            </div>
            <div className="footer-image">
              <img srcSet="/images/app3/img8.png 2x" alt="" />
            </div>
          </div>
          <div className="footer-bottom">
            <p className='g-text'>©Heling 2021.</p>
            <img srcSet="/images/app3/logo.png 2x" alt="" className='footer-logo' />
            <p className='g-text'>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App3;
