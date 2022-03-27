import React from 'react'
import '../sass/app4/app.scss'

export const App4 = () => {
  return (
    <div>
      <div class="dropdown">
        <div class="dropdown-select">
          <span class="select">Select Item</span>
          <i className="fa fa-caret-down icon"></i>
        </div>
        <div class="dropdown-list">
          <div class="dropdown-item">title</div>
          <div class="dropdown-item">title</div>
          <div class="dropdown-item">title</div>
        </div>
      </div>
    </div>
  )
}
