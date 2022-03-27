import React, {useEffect} from 'react'
import '../sass/app4/app.scss'

export const App4 = () => {
  useEffect(() => {
    // // setTimeout(() => {
    // const input = document.querySelector('.input');
    // const eyeOpen = document.querySelector('.eye-open');
    // const eyeClose = document.querySelector('.eye-close');
    // eyeOpen.addEventListener('click', function() {
    //   eyeOpen.classList.add('hidden');
    //   eyeClose.classList.remove('hidden');
    //   input.setAttribute('type', 'password');
    // });

    // eyeClose.addEventListener('click', function() {
    //   eyeClose.classList.add('hidden');
    //   eyeOpen.classList.remove('hidden');
    //   input.setAttribute('type', 'text');
    // });
    // // }, 0);

    // start hide show password

    const toggle = document.querySelectorAll('.eye');
    toggle.forEach(element => {
      element.addEventListener('click', function() {
        if(element.matches('.eye-close')) {
          this.classList.add('hidden');
          this.previousElementSibling.classList.remove('hidden');
          this.parentNode.previousElementSibling.setAttribute('type', 'text');
        } else {
          this.classList.add('hidden');
          this.nextElementSibling.classList.remove('hidden');
          this.parentNode.previousElementSibling.setAttribute('type', 'password');
        }
      });
    }); 
    // end hide show password

    // start drag drop
    const targets = document.querySelectorAll('.target');
    const boxes = document.querySelectorAll('.box');

    // target.addEventListener('dragstart', function(e) {
    //   this.classList.add('dragging');
    // });

    // target.addEventListener('dragend', function(e) {
    //   this.classList.remove('dragging');
    // });
    let currentTarget = null;

    targets.forEach(element => {
      element.addEventListener('dragstart', function(e) {
        currentTarget = this;
        this.classList.add('dragging');
      });

      element.addEventListener('dragend', function(e) {
        this.classList.remove('dragging');
      });
    });

    boxes.forEach(box => {
      box.addEventListener('dragover', function(e) {
        e.preventDefault();
        if(!this.querySelector('.target')) {
          this.appendChild(currentTarget);
        }
      });

      box.addEventListener('drop', function(e) {
        if(!this.querySelector('.target')) {
          this.appendChild(currentTarget);
        }
      });
    });
    
    // end drag drop
    
  }, []);

  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-select">
          <span className="select">Select Item</span>
          <i className="fa fa-caret-down icon"></i>
        </div>
        <div className="dropdown-list">
          <div className="dropdown-item">title</div>
          <div className="dropdown-item">title</div>
          <div className="dropdown-item">title</div>
        </div>
      </div>

      <div className='field password-container' style={{fontSize: '1.6rem'}}>
        <input type="password" className="input" placeholder='password' />
        <div className='toggle-password'>
          <svg xmlns="http://www.w3.org/2000/svg" className="eye eye-open hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" className="eye eye-close" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
        </div>
      </div>

      <div className='field password-container' style={{fontSize: '1.6rem'}}>
        <input type="password" className="input" placeholder='password confirmation' />
        <div className='toggle-password'>
          <svg xmlns="http://www.w3.org/2000/svg" className="eye eye-open hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" className="eye eye-close" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
        </div>
      </div>

      <div className='dragdropWrapper'>
        <div className="box">
          <div className="target" draggable>abc1</div>
        </div>
        <div className="box">
          <div className="target" draggable>xyz1</div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  )
}
