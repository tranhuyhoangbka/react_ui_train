import React, {Component, useEffect, useState, useRef} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../sass/app.scss";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="slick-prev slick-arrow"      
      onClick={onClick}
    >
      <img src="/images/left.svg" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="slick-next slick-arrow"      
      onClick={onClick}
    >
      <img src="/images/right.svg" />
    </button>
  );
}

function Home() {
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
  });

  useEffect(() => {
    return function cleanup() {
      document.addEventListener('click', handleClickOutside)
    };
  });
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      }]
  };
  const showMenu = (e) => {
    setMenuShowed(true);
  }
  return (
    <div className="wrapper">      
      <header className="header">
        <div className="container">
          <div className="header-container">
            <img srcSet="/images/Logo.png 2x" alt="" className="header-logo" />
            <ul className={menuShowed ? "menu is-show" : "menu"} ref={menuRef}>
              <li className="menu-item">
                <a href="#" className="menu-link">About</a>
              </li>

              <li className="menu-item">
                <a href="#" className="menu-link">Features</a>
              </li>

              <li className="menu-item">
                <a href="#" className="menu-link">Pricing</a>
              </li>

              <li className="menu-item">
                <a href="#" className="menu-link">Testimonials</a>
              </li>

              <li className="menu-item">
                <a href="#" className="menu-link">Help</a>
              </li>

              <li className="menu-item menu-item--auth">
                <a href="#" className="header-signin">Sign in</a>
                <a href="#" className="button button--outline">Sign up</a>
              </li>
            </ul>

            <div className="menu-toggle" onClick={showMenu} ref={toggleMenuRef}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="header-auth">
              <a href="#" className="header-signin">Sign in</a>
              <a href="#" className="button button--outline">Sign up</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className='container'>
            <div className='hero-container'>
              <div className='hero-content'>
                <h1 className='hero-heading'>
                  Want anything to be easy with <strong>LaslesVPN.</strong>
                </h1>
                <p className='text hero-desc'>Provide a network for all your needs with ease and fun using <span className='text-medium'>LaslesVPN</span> discover interesting features from us.</p>
                <a href="#" className="button button--primary button--rounded">Get Started</a>
              </div>
              <div className='hero-image'>
                <img srcSet="/images/hero-image.png 2x" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className='container'>
            <div className='intro-container'>
              <div className='intro-item'>
                <div className='intro-icon'>
                  <img srcSet="/images/user.png 2x" />
                </div>
                <div className='intro-info'>
                  <h3 className='intro-title'>90+</h3>
                  <span className='intro-text'>Users</span>
                </div>
              </div>

              <div className='intro-item'>
                <div className='intro-icon'>
                  <img srcSet="/images/location.png 2x" />
                </div>
                <div className='intro-info'>
                  <h3 className='intro-title'>30+</h3>
                  <span className='intro-text'>Locations</span>
                </div>
              </div>

              <div className='intro-item'>
                <div className='intro-icon'>
                  <img srcSet="/images/Server.png 2x" />
                </div>
                <div className='intro-info'>
                  <h3 className='intro-title'>50+</h3>
                  <span className='intro-text'>Servers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='feature'>
          <div className='container'>
            <div className='feature-container'>
              <div className='feature-image'>
                <img srcSet="/images/feature-image.png 2x" alt="" />
              </div>
              <div className='feature-content'>
                <h2 className='heading'>We Provide Many Features You Can Use</h2>
                <p className='text feature-desc'>You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul className='feature-list'>
                  <li className='feature-item'>
                    <img src="/images/icon-check.svg" alt="" className="feature-icon" />
                    <span>Powerfull online protection.</span>
                  </li>
                  <li className='feature-item'>
                    <img src="/images/icon-check.svg" alt="" className="feature-icon" />
                    <span>Internet without borders.</span>
                  </li>
                  <li className='feature-item'>
                    <img src="/images/icon-check.svg" alt="" className="feature-icon" />
                    <span>Supercharged VPN</span>
                  </li>
                  <li className='feature-item'>
                    <img src="/images/icon-check.svg" alt="" className="feature-icon" />
                    <span>No specific time limits.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className='plan-network-container'>
          <section className='plan'>
            <div className='container'>
              <div className='plan-header'>
                <h2 className='heading'>Choose Your Plan</h2>
                <p className='text'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
              </div>
              <div className='plan-list'>
                <div className='plan-item'>
                  <div className='plan-image'>
                    <img srcSet='/images/plan-image.png 2x' alt="" />
                  </div>
                  <h3 className='plan-title'>Free Plan</h3>
                  <div className='plan-details'>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                  </div>

                  <h4 className='plan-pricing'>Free</h4>
                  <a className='button button--outline'>Select</a>
                </div>
                <div className='plan-item'>
                  <div className='plan-image'>
                    <img srcSet='/images/plan-image.png 2x' alt="" />
                  </div>
                  <h3 className='plan-title'>Free Plan</h3>
                  <div className='plan-details'>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                  </div>

                  <h4 className='plan-pricing'>Free</h4>
                  <a className='button button--outline'>Select</a>
                </div>
                <div className='plan-item is-active'>
                  <div className='plan-image'>
                    <img srcSet='/images/plan-image.png 2x' alt="" />
                  </div>
                  <h3 className='plan-title'>Free Plan</h3>
                  <div className='plan-details'>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                    <div className='plan-info'>
                      <img src="/images/icon-check-line.svg" alt="" />
                      <span>Unlimited Bandwitch</span>
                    </div>
                  </div>

                  <h4 className='plan-pricing'>Free</h4>
                  <a className='button button--primary button--shadown'>Select</a>
                </div>
              </div>
            </div>
          </section>

          <section className='network'>
            <div className='container'>
              <div className='boxed'>
                <h2 className='heading'>Huge Global Network of Fast VPN</h2>
                <p className='text'>See <span className='text-medium'>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
              </div>
              <div className='network-image'>
                <img srcSet='/images/network-image.png 2x' alt="" />
              </div>
            </div>
          </section>
        </div>
        <section className='partner'>
          <div className='container'>
            <div className='partner-container'>
              <div className='partner-item'><img srcSet='/images/logo-netflix.png 2x' alt="" /></div>
              <div className='partner-item'><img srcSet='/images/logo-reddit.png 2x' alt="" /></div>
              <div className='partner-item'><img srcSet='/images/logo-amazon.png 2x' alt="" /></div>
              <div className='partner-item'><img srcSet='/images/logo-discord.png 2x' alt="" /></div>
              <div className='partner-item'><img srcSet='/images/logo-spotify.png 2x' alt="" /></div>
            </div>
          </div>
        </section>
        <section className='customer'>
          <div className='container'>
            <div className='boxed'>
              <h2 className='heading'>Trusted by Thousands of Happy Customer</h2>
              <p className='text'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            </div>
            <div className='customer-list'>
              <Slider {...settings}>
                <div className='customer-item'>
                  <div className='customer-top'>
                    <div className='customer-info'>
                      <div className='customer-avatar'>
                        <img srcSet="/images/customer-avatar1.png 2x" alt="" />
                      </div>
                      <div className='customer-content'>
                        <h3 className='heading-small customer-name'>Viezh Robert</h3>
                        <span className='text-small customer-address'>Warsaw, Poland</span>
                      </div>
                    </div>
                    <div className='customer-rating'>
                      <span>4.5</span>
                      <img src="/images/icon-star.svg" alt="" />
                    </div>
                  </div>
                  <div className='text customer-desc'>
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                  </div>
                </div>

                <div className='customer-item'>
                  <div className='customer-top'>
                    <div className='customer-info'>
                      <div className='customer-avatar'>
                        <img srcSet="/images/customer-avatar1.png 2x" alt="" />
                      </div>
                      <div className='customer-content'>
                        <h3 className='heading-small customer-name'>Viezh Robert</h3>
                        <span className='text-small customer-address'>Warsaw, Poland</span>
                      </div>
                    </div>
                    <div className='customer-rating'>
                      <span>4.5</span>
                      <img src="/images/icon-star.svg" alt="" />
                    </div>
                  </div>
                  <div className='text customer-desc'>
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                  </div>
                </div>

                <div className='customer-item'>
                  <div className='customer-top'>
                    <div className='customer-info'>
                      <div className='customer-avatar'>
                        <img srcSet="/images/customer-avatar1.png 2x" alt="" />
                      </div>
                      <div className='customer-content'>
                        <h3 className='heading-small customer-name'>Viezh Robert</h3>
                        <span className='text-small customer-address'>Warsaw, Poland</span>
                      </div>
                    </div>
                    <div className='customer-rating'>
                      <span>4.5</span>
                      <img src="/images/icon-star.svg" alt="" />
                    </div>
                  </div>
                  <div className='text customer-desc'>
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                  </div>
                </div>

                <div className='customer-item'>
                  <div className='customer-top'>
                    <div className='customer-info'>
                      <div className='customer-avatar'>
                        <img srcSet="/images/customer-avatar1.png 2x" alt="" />
                      </div>
                      <div className='customer-content'>
                        <h3 className='heading-small customer-name'>Viezh Robert</h3>
                        <span className='text-small customer-address'>Warsaw, Poland</span>
                      </div>
                    </div>
                    <div className='customer-rating'>
                      <span>4.5</span>
                      <img src="/images/icon-star.svg" alt="" />
                    </div>
                  </div>
                  <div className='text customer-desc'>
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>

        <section className='subscribe'>
          <div className='container'>
            <div className='subscribe-container'>
              <div className='subscribe-content'>
                <h2 className='heading'>Subscribe Now for Get Special Features!</h2>
                <p className='text'>Let's subscribe with us and find the fun.</p>                
              </div>
              <a href="#" className='button button--primary button--rounded button--shadow'>Subscribe Now</a>
            </div>
          </div>
        </section>
      </main>

      <footer className='footer'>
        <div className='container'>
          <div className='footer-container'>
            <div className='footer-column'>
              <a className='footer-logo' href="#">
                <img srcSet='/images/Logo.png 2x' />
              </a>
              <p className='text footer-desc'><span className='text-medium'>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
              <div className='footer-social'>
                <a href='#' className='social-item'><img srcSet='/images/Facebook.png 2x' /></a>
                <a href='#' className='social-item'><img srcSet='/images/Twitter.png 2x' /></a>
                <a href='#' className='social-item'><img srcSet='/images/Instagram.png 2x' /></a>
              </div>
              <p className='copyright'>©2020Lasles<span>VPN</span></p>
            </div>
            <div className='footer-column'>
              <h3 className='footer-heading heading-small'>Product</h3>
              <ul className='footer-links'>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
              </ul>
            </div>
            <div className='footer-column'>
              <h3 className='footer-heading heading-small'>Engage</h3>
              <ul className='footer-links'>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
              </ul>
            </div>
            <div className='footer-column'>
            <h3 className='footer-heading heading-small'>Earn Money</h3>
            <ul className='footer-links'>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
                <li className='footer-item'>
                  <a href='#' className='footer-link'>Download</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
