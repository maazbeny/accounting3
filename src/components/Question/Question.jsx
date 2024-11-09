import React from 'react'
import './Question.css'
const Question = () => {
    return (
        <div className="buisness-right">
            <div className="buisness-right-container">


                <div className="buisness-right-box">
                    <h2>Have Any Question?</h2>
                    <p>If you have any questions or need more information about our services, don’t hesitate to get in touch. Our team is here to provide the answers and support you need.</p>

                </div>
                <div className="info-request">
                    <div className="info-contact">
                        <div className="buisness-icon">
                            <i className="fa-solid fa-phone"></i>
                            <p>0208 191 0732</p>
                        </div>


                    </div>

                    <div className="buisness-icon">
                        <i className="fa-solid fa-envelope"></i>
                        <p>info@faizaccountax.com</p>
                    </div>
                    <a href="https://calendly.com/faizaccountax/30min "><button className='req-btn'>Request a callback</button></a>
                </div>
            </div>
        </div>
    )
}

export default Question