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
    </div>
  );
}

export default App2;