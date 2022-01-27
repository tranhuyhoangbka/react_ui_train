import React from 'react';
import '../sass/app2/app.scss';

function App2() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='container'>
          <div className='header-main'>
            <img srcSet='/images/app2/logo.png 2x' />
            <ul className="menu">
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
                    <i class='fal fa-angle-down'></i>
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
      </main>
    </div>
  );
}

export default App2;