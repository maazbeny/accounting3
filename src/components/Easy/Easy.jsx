import React from 'react'
import './Easy.css'

const Easy = () => {
  return (
    <div className='easy'>
      <h1>How easy is it to join The Accountancy Partnership?</h1>
      <div className="easy-steps">
        <div className="easy-box">
          <div className="easy-bg">
            <p>1</p>
          </div>
          <p className="easy-box-heading">Get a quote
          </p>
          <p className="easy-box-para">Get your instant online quote to find out how much you'll be paying</p>
        </div>

        <div className="easy-box">
          <div className="easy-bg">
            <p>2</p>
          </div>
          <p className="easy-box-heading">Sign up to our service</p>
          <p className="easy-box-para">Fill out our simple online registration form. It’s only short, we promise.</p>
        </div>

        <div className="easy-box">

          <div className="easy-bg">
            <i class="fa-solid fa-check check1"></i>
          </div>
          <p className="easy-box-heading">Receive a warm welcome</p>
          <p className="easy-box-para">We’ll get you set up, settled in and introduce you to your accountant.</p>
        </div>
      </div>
    </div>
  )
}

export default Easy
