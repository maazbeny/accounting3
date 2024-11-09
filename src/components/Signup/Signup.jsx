import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        businessType: '',
        businessName: '',
        services: [],
        details: '',
        contact: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDropdownChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const services = checked
                ? [...prevData.services, value]
                : prevData.services.filter(service => service !== value);
            return { ...prevData, services };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: "5f2cdd6f-17f5-43b2-b9af-e287cda03e09",
                }),
            });
            const result = await response.json();

            if (result.success) {
                setFormSubmitted(true);
                setError('');
            } else {
                setError('Submission failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="signup">
            <div className="signup-box">
                <span className="cross" onClick={onClose}>
                    &times;
                </span>
                {formSubmitted ? (
                    <div className="thanks">
                        <h2>Thank you for signing up!</h2>
                        <p className="received">
                            We’ve received your details and will be in touch soon to confirm your final quote and discuss the next steps. We look forward to working with you!
                        </p>
                    </div>
                ) : (
                    <>
                        <h2 className="sign-head">Sign Up</h2>
                        {error && <p className="error">{error}</p>}
                        <form className='form' onSubmit={handleSubmit}>
                            <div className="signup-sub-box">
                                <span className="cross" onClick={onClose}>
                                    &times;
                                </span>
                                <div className="signup-block">
                                    <input className="sign-inp"
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        required
                                    />
                                    <input className="sign-inp"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        required
                                    />
                                    <input className="sign-inp"
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        onChange={handleChange}
                                        required
                                    />
                                    <input className="sign-inp"
                                        type="text"
                                        name="businessName"
                                        placeholder="Business Name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="signup-block">
                                    <div className="dropdown sign-drop">
                                        <button className="btn sign-btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {formData.businessType || 'Business Type'}
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li onClick={() => handleDropdownChange('businessType', 'Sole Trader')}><a className="dropdown-item">Sole Trader</a></li>
                                            <li onClick={() => handleDropdownChange('businessType', 'Limited Company')}><a className="dropdown-item">Limited Company</a></li>
                                            <li onClick={() => handleDropdownChange('businessType', 'Partnership')}><a className="dropdown-item">Partnership</a></li>
                                        </ul>
                                    </div>

                                    <div className="dropdown sign-drop" onClick={() => setShowServicesDropdown(!showServicesDropdown)}>
                                        <button className="btn sign-btn btn-secondary dropdown-toggle" type="button">
                                            {`Services `}
                                        </button>
                                        {showServicesDropdown && (
                                            <div className="dropdown-menu dropdown-menu-dark show">
                                                {['Bookkeeping', 'Payroll', 'VAT Returns', "Accounts", 'Tax Returns', 'Others'].map(service => (
                                                    <label key={service} className="dropdown-item">
                                                        <input
                                                            type="checkbox"
                                                            value={service}
                                                            checked={formData.services.includes(service)}
                                                            onChange={handleCheckboxChange}
                                                        /> {service}
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <input className="sign-inp"
                                        type="text"
                                        name="details"
                                        placeholder="Additional Details"
                                        onChange={handleChange}
                                    />
                                    <div className="dropdown sign-drop">
                                        <button className="btn sign-btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {formData.contact || 'Preferred Contact'}
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li onClick={() => handleDropdownChange('contact', 'Email')}><a className="dropdown-item">Email</a></li>
                                            <li onClick={() => handleDropdownChange('contact', 'Phone')}><a className="dropdown-item">Phone</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button className='sign-submit' type="submit">Sign up</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Signup;
