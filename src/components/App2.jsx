import React, {useState, useEffect, useRef} from 'react';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faStar, faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import '../sass/app2/app.scss';
function App2() {
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

  const showMenu = (e) => {
    setMenuShowed(true);
  }
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='container'>
          <div className='header-main'>
            <img srcSet='/images/app2/logo.png 2x' />
            <ul className={menuShowed ? 'menu is-show' : 'menu'} ref={menuRef}>
              <li className="menu-item">
                <a href="#" className="menu-link">Home</a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">Destinations</a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">About</a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">Partner</a>
              </li>
              <li className="menu-item">
                <a href='#' className="btn btn--secondary">Login</a>
              </li>
              <li className="menu-item">
                <a href='#' className="btn btn--primary">Register</a>
              </li>
            </ul>

            <span ref={toggleMenuRef}><FontAwesomeIcon icon={faBars} className='menu-toggle' onClick={showMenu} /></span>
          </div>
        </div>
      </header>

      <main>
        <section className='hero'>
          <div className='container'>
            <div className='hero-main'>
              <div className='hero-content'>
                <h1 class='heading hero-heading'>Explore and Travel</h1>
                <div className='hero-caption'>Holiday finder</div>
                <div className='hero-form'>
                <div class="dropdown">
                  <div class="dropdown-select">
                    <span class="dropdown-value">Location</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  <div class="dropdown-list">
                    <div class="dropdown-item">title</div>
                    <div class="dropdown-item">title</div>
                    <div class="dropdown-item">title</div>
                  </div>
                </div>
                <div class="dropdown">
                  <div class="dropdown-select">
                    <span class="dropdown-value">Location</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  <div class="dropdown-list">
                    <div class="dropdown-item">title</div>
                    <div class="dropdown-item">title</div>
                    <div class="dropdown-item">title</div>
                  </div>
                </div>
                <div class="dropdown">
                  <div class="dropdown-select">
                    <span class="dropdown-value">Location</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  <div class="dropdown-list">
                    <div class="dropdown-item">title</div>
                    <div class="dropdown-item">title</div>
                    <div class="dropdown-item">title</div>
                  </div>
                </div>
                <div class="dropdown">
                  <div class="dropdown-select">
                    <span class="dropdown-value">Location</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  <div class="dropdown-list">
                    <div class="dropdown-item">title</div>
                    <div class="dropdown-item">title</div>
                    <div class="dropdown-item">title</div>
                  </div>
                </div>
                </div>
                <a className='btn btn--primary' href=''>Explore</a>
              </div>
              <div className='hero-image'>
                <img srcSet='/images/app2/img1.png 2x' alt='' />
              </div>
            </div>
          </div>
        </section>
        <section className='explore'>
          <div className='container'>
            <div className='explore-main'>
              <div className='explore-image'>
                <img srcSet='/images/app2/explore-img.png 2x' alt='' />
              </div>
              <div className='explore-content'>
                <h2 className='heading heading--small explore-heading'>
                  A new way to explore the world 
                </h2>
                <p className='text explore-desc'>
                For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect 
trip, but now, they can also let Lonely Planet Experiences lead the way
                </p>
                <a href='#' className='btn btn--primary'>Learn more</a>
              </div>
            </div>
          </div>
        </section>

        <section className='destination'>
          <div className='container'>
            <div className='destination-main'>
              <div className='destination-header'>
                <h3 className='heading heading--small'>Featured destinations</h3>
                <a className='viewall' href="#">
                  <span>View all</span> 
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </div>
              <div className='destination-list'>
                <div className='destination-item'>
                  <div className='destination-image'>
                    <img srcSet='/images/app2/destination-img1.png 2x' alt='' />
                  </div>
                  <div className='destination-content'>
                    <h3 className='destination-name'>Raja Ampat</h3>
                    <span>Indonesia</span>
                  </div>
                </div>

                <div className='destination-item'>
                  <div className='destination-image'>
                    <img srcSet='/images/app2/destination-img2.png 2x' alt='' />
                  </div>
                  <div className='destination-content'>
                    <h3 className='destination-name'>Fanjingshan</h3>
                    <span>China</span>
                  </div>
                </div>

                <div className='destination-item'>
                  <div className='destination-image'>
                    <img srcSet='/images/app2/destination-img3.png 2x' alt='' />
                  </div>
                  <div className='destination-content'>
                    <h3 className='destination-name'>Vevey</h3>
                    <span>Switzerland</span>
                  </div>
                </div>

                <div className='destination-item'>
                  <div className='destination-image'>
                    <img srcSet='/images/app2/destination-img4.png 2x' alt='' />
                  </div>
                  <div className='destination-content'>
                    <h3 className='destination-name'>Skadar</h3>
                    <span>Montenegro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='guide'>
          <div className='container'>
            <div className='guide-main'>
              <div className='guide-content'>
                <h2 className='heading heading--small guide-heading'>Guides by Thousand Sunny</h2>
                <p className='text guide-desc'>
                  Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.
                </p>
                <a href='#!' className='btn btn--primary'>Download</a>
              </div>
              <div className='guide-image'>
                <img srcSet='/images/app2/guide-img.png 2x' alt='' />
              </div>
            </div>
          </div>
        </section>

        <section className='testimonial'>
          <div className='container'>
            <div className='testimonial-main'>
              <h2 className='heading heading--small testimonial-heading'>Testimonials</h2>
              <div className='testimonial-list'>
                <div className='arrows'>
                  <div className='arrow arrow-left'>
                  <FontAwesomeIcon icon={faAngleLeft} />
                  </div>

                  <div className='arrow arrow-right'>
                  <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
                <div className='testimonial-item'>
                  <div className='testimonial-content'>
                    <div className='testimonial-rating'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className='testimonial-desc text'>
                      “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
                    </div>
                    <div className='testimonial-author'>
                      <h3 className='testimonial-name'>Edward Newgate</h3>
                      <span className='testimonial-job'>Founder Circle</span>
                    </div>
                  </div>
                  <div className='testimonial-image'>
                    <img srcSet='/images/app2/testimonial1.png 2x' alt='' />
                  </div>
                </div>

                <div className='testimonial-item'>
                  <div className='testimonial-content'>
                    <div className='testimonial-rating'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className='testimonial-desc text'>
                      “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
                    </div>
                    <div className='testimonial-author'>
                      <h3 className='testimonial-name'>Edward Newgate</h3>
                      <span className='testimonial-job'>Founder Circle</span>
                    </div>
                  </div>
                  <div className='testimonial-image'>
                    <img srcSet='/images/app2/testimonial1.png 2x' alt='' />
                  </div>
                </div>

                <div className='testimonial-item'>
                  <div className='testimonial-content'>
                    <div className='testimonial-rating'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className='testimonial-desc text'>
                      “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
                    </div>
                    <div className='testimonial-author'>
                      <h3 className='testimonial-name'>Edward Newgate</h3>
                      <span className='testimonial-job'>Founder Circle</span>
                    </div>
                  </div>
                  <div className='testimonial-image'>
                    <img srcSet='/images/app2/testimonial1.png 2x' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='story'>
          <div className='container'>
            <div className='story-main'>
              <div className='story-header'>
                <h3 className='heading heading--small story-heading'>Trending stories</h3>
                <a className='viewall' href="#">
                  <span>View all</span> 
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </div>
              <div className='story-list'>
                <div className='story-item'>
                  <div className='story-image'>
                    <img srcSet='/images/app2/story1.png 2x' alt='' />
                  </div>
                  <div className='story-content'>
                    <h4 className='story-title'>
                      The many benefits of taking a healing holiday
                    </h4>
                    <p className='story-desc'>
                      ‘Helaing holidays’ are on the rise tohelp maximise your health and happines...
                    </p>
                    <a href='#' className='story-more'>Read more</a>
                  </div>
                </div>

                <div className='story-item'>
                  <div className='story-image'>
                    <img srcSet='/images/app2/story2.png 2x' alt='' />
                  </div>
                  <div className='story-content'>
                    <h4 className='story-title'>
                    The best Kyoto restaurant to try Japanese food
                    </h4>
                    <p className='story-desc'>
                      From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...
                    </p>
                    <a href='#' className='story-more'>Read more</a>
                  </div>
                </div>

                <div className='story-item'>
                  <div className='story-image'>
                    <img srcSet='/images/app2/story3.png 2x' alt='' />
                  </div>
                  <div className='story-content'>
                    <h4 className='story-title'>
                    Skip Chichen Itza and head to this remote Yucatan
                    </h4>
                    <p className='story-desc'>
                      It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...
                    </p>
                    <a href='#' className='story-more'>Read more</a>
                  </div>
                </div>

                <div className='story-item'>
                  <div className='story-image'>
                    <img srcSet='/images/app2/story4.png 2x' alt='' />
                  </div>
                  <div className='story-content'>
                    <h4 className='story-title'>
                      Surf’s up at these beginner spots around the world
                    </h4>
                    <p className='story-desc'>
                    If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...
                    </p>
                    <a href='#' className='story-more'>Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='container'>
          <div className='footer-top'>
            <div className='footer-column'>
              <img srcSet='/images/app2/logo.png 2x' alt='' className='footer-logo'/>
              <p className='text footer-desc'>
                Plan and book your perfect trip with expert advice, travel tips destination information from us
              </p>
              <p className='text footer-copyright'>©2020 Thousand Sunny. All rights reserved</p>
            </div>
            <div className='footer-column'>
              <h3 className='footer-title'>Destinations</h3>
              <ul className='footer-links'>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
              </ul>
            </div>
            <div className='footer-column'>
              <h3 className='footer-title'>Destinations</h3>
              <ul className='footer-links'>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
              </ul>
            </div>
            <div className='footer-column'>
              <h3 className='footer-title'>Destinations</h3>
              <ul className='footer-links'>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
                <li className='footer-item'><a href='#' className='footer-link'>Destination Guides</a></li>
              </ul>
            </div>
          </div>
          <div className='footer-bottom'>
            <a href='#' className='footer-social'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href='#' className='footer-social'>
               <FontAwesomeIcon icon={faFacebookF} />
            </a>
            
            <a href='#' className='footer-social'>
               <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href='#' className='footer-social'>
               <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href='#' className='footer-social'>
               <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App2;