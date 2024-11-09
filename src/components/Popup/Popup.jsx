import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, onOpenSignup }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        businessType: '',
        partners: '',
        turnover: '',
        payroll: '',
        employees: '',
        vatReturns: '',
        bookkeeping: '',
        transactionsCount: '',
        quote: null, // Include quote in the initial formData
    });
    const [needsBookkeeping, setNeedsBookkeeping] = useState(false);
    const [buisness, setbuisness] = useState(false);
    const [payroll, setpayroll] = useState(false);
    const [pension, setpension] = useState(false);
    const [quote, setQuote] = useState(null); // State to hold calculated quote
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // Ensure all required dropdowns are selected
        if (formData.businessType === 'Select business type') {
            newErrors.businessType = 'Business Type is required';
        }

        if (!formData.turnover || formData.turnover === 'Select turnover') {
            newErrors.turnover = 'Turnover is required';
        }
        if (!formData.payroll || formData.payroll === 'Need payroll managing?') {
            newErrors.payroll = 'Payroll selection is required';
        }
        if (!formData.vatReturns || formData.vatReturns === 'Need VAT Returns Completing?') {
            newErrors.vatReturns = 'VAT Returns selection is required';
        }
        if (!formData.bookkeeping || formData.bookkeeping === 'Need Bookkeeping?') {
            newErrors.bookkeeping = 'Bookkeeping selection is required';
        }
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';

        if (payroll && !formData.employees) newErrors.employees = 'Number of employees is required';
        if (needsBookkeeping && !formData.transactionsCount) newErrors.transactionsCount = 'Number of transactions is required';
        if (buisness && !formData.partners) newErrors.partners = 'Number of partners is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDropdownChange = (name, value, valid) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            ...(valid === false && name === 'bookkeeping' && { transactionsCount: '' }), // Clear transactionsCount
            ...(valid === false && name === 'payroll' && { employees: '' }), // Clear employees
            ...(valid === false && name === 'businessType' && { partners: '' }), // Clear partners
            ...(valid === false && name === 'pension' && { relevantEmployees: '' }) // Clear relevantEmployees
        }));

        if (name === 'bookkeeping') {
            setNeedsBookkeeping(valid);
        }
        if (name === 'businessType') {
            setbuisness(valid);
        }
        if (name === 'payroll') {
            setpayroll(valid);
        }
        if (name === 'pension') {
            setpension(valid);
        }
        console.log(formData)
    };
    const handleButtonClick = () => {
        onOpenSignup(); // Call to open the signup
        onClose();    // Call to close the popup
    };

    const calculateQuote = () => {
        let basePrice = 0;

        // Business type pricing
        if (formData.businessType === 'Sole Trader') basePrice += 20;
        if (formData.businessType === 'Limited Company') basePrice += 40;
        if (formData.businessType === 'Partnership') {
            const partnerCount = parseInt(formData.partners) || 0;
            basePrice += 20 + 20 * partnerCount;
        }

        // Turnover band pricing
        switch (formData.turnover) {
            case 'Turnover: £0 - £40,000':
                basePrice += 0;
                break;
            case 'Turnover: £40,001 - £90,000':
                basePrice += 12;
                break;
            case 'Turnover: £90,001 - £200,000':
                basePrice += 24;
                break;
            case 'Turnover: £200,001 - £300,000':
                basePrice += 36;
                break;
            case 'Turnover: £300,001 - £400,000':
                basePrice += 100;
                break;
            case 'Turnover: £400,001 - £500,000':
                basePrice += 120;
                break;
            case 'Turnover: £500,001 - £600,000':
                basePrice += 140;
                break;
            case 'Turnover: £600,001 - £700,000':
                basePrice += 160;
                break;
            case 'Turnover: £700,001 - £800,000':
                basePrice += 180;
                break;
            case 'Turnover: £800,001 - £900,000':
                basePrice += 200;
                break;
            case 'Turnover: £900,001 - £1,000,000':
                basePrice += 220;
                break;
            case 'Turnover: £1,000,000+':
                basePrice += 240; // Update as necessary
                break;
            default:
                break;
        }

        // Additional services pricing
        if (payroll) {
            const employeeCount = parseInt(formData.employees) || 0;
            let payrollBase = 25;


            if (formData.payroll === 'payroll: Weekly') {
                payrollBase += (5 * employeeCount * 52) / 12;
            } else if (formData.payroll === 'payroll: Fortnightly') {
                payrollBase += (5 * employeeCount * 26) / 12;
            } else if (formData.payroll === 'payroll: Monthly') {
                payrollBase += (5 * employeeCount * 12) / 12;
            }


        }

        if (pension) {
            const relevantEmployeeCount = parseInt(formData.relevantEmployees) || 0;
            basePrice += 5 * relevantEmployeeCount;
        }

        if (needsBookkeeping) {
            const transactionCount = parseInt(formData.transactionsCount) || 0;
            basePrice += transactionCount * 0.75;
        }

        // VAT Returns pricing
        if (formData.vatReturns && formData.vatReturns.includes('Yes')) {
            switch (formData.turnover) {
                case 'Turnover: £0 - £40,000':
                    basePrice += 20;
                    break;
                case 'Turnover: £40,001 - £90,000':
                    basePrice += 40;
                    break;
                case 'Turnover: £90,001 - £200,000':
                    basePrice += 60;
                    break;
                case 'Turnover: £200,001 - £300,000':
                    basePrice += 80;
                    break;
                case 'Turnover: £300,001 - £400,000':
                    basePrice += 100;
                    break;
                case 'Turnover: £400,001 - £500,000':
                    basePrice += 120;
                    break;
                case 'Turnover: £500,001 - £600,000':
                    basePrice += 140;
                    break;
                case 'Turnover: £600,001 - £700,000':
                    basePrice += 160;
                    break;
                case 'Turnover: £700,001 - £800,000':
                    basePrice += 180;
                    break;
                case 'Turnover: £800,001 - £900,000':
                    basePrice += 200;
                    break;
                case 'Turnover: £900,001 - £1,000,000':
                    basePrice += 220;
                    break;
                case 'Turnover: £1,000,000+':
                    // No additional price defined for this range
                    break;
                default:
                    break;
            }
        }

        // Round basePrice to 2 decimal places
        const finalQuote = parseFloat(basePrice.toFixed(2));

        setQuote(finalQuote);
        return finalQuote;
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            const calculatedQuote = calculateQuote(); // Get the calculated quote

            // Update formData with the quote
            const updatedFormData = {
                ...formData,
                quote: `£ ${calculatedQuote}`, // Add quote to formData
            };

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...updatedFormData, // Use updated formData here
                        access_key: "5f2cdd6f-17f5-43b2-b9af-e287cda03e09",
                    }),
                });

                const result = await response.json();

                if (result.success) {
                    setFormSubmitted(true); // Mark form as submitted
                    setErrors({}); // Clear any previous errors
                } else {
                    setErrors({ submission: 'Submission failed. Please try again.' });
                }
            } catch (err) {
                setErrors({ submission: 'An error occurred. Please try again.' });
            }

            setFormSubmitted(true);
            const calculatedElement = document.getElementById('calculated');
            if (calculatedElement) {
                calculatedElement.scrollIntoView({ behavior: 'smooth' });
            }

            console.log("submitted");
        }
    };


    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div id="pop" className="pop">
                <span className="close-button" onClick={onClose}>&times;</span>
                {formSubmitted ? (
                    // Show quote after form is submitted
                    <div className='calculated'>
                        <h2>Your quotation has been calculated at </h2>
                        <h1>£{quote}</h1>
                        <p>per month</p>
                        <p className='note'><strong>Note: </strong>This is an indicative price based on the details you provided. One of our team members will confirm the final price with you shortly.</p>
                        <p className='happy'>If you’re happy with your estimated price, complete your sign-up below:</p>

                        <div className="calculated-btn">
                            <button onClick={handleButtonClick} className='cal-btn'>Sign up</button>
                        </div>

                    </div>

                ) : (
                    <form className='form' onSubmit={handleSubmit}>
                        <div className="popup-overlay">
                            <div id="pop" className="pop">
                                <span className="close-button" onClick={onClose}>&times;</span>
                                <h2 className='pop-qoute-head'>Get An Instant Quote</h2>

                                <div className="pop-qoute-table">
                                    <div className="pop-text-input">

                                        <div className="pop-block">

                                            <div className="dropdown extra">
                                                {errors.businessType ? <div className="error-message1">{errors.businessType}</div> : <div className="empty1"></div>}
                                                <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    {formData.businessType || 'Select business type'}
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('businessType')}>Select business type</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('businessType', 'Sole Trader', false)}>Sole Trader</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('businessType', 'Limited Company', false)}>Limited Company</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('businessType', 'Partnership', true)}>Partnership</a></li>
                                                </ul>
                                            </div>
                                            {buisness && (
                                                <div className="subfield">
                                                    {errors.partners ? <div className="error-message1">{errors.partners}</div> : <div className="empty1"></div>}
                                                    <input
                                                        className='pop-input-left'
                                                        placeholder='Enter number of Partners'
                                                        type="text"
                                                        name="partners"
                                                        value={formData.partners || ''}
                                                        onChange={handleChange}
                                                    // Make this required when business type is 'Partnership'
                                                    />
                                                </div>
                                            )}
                                            <div className="dropdown extra">
                                                {errors.turnover ? <div className="error-message1">{errors.turnover}</div> : <div className="empty1"></div>}
                                                <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    {formData.turnover || 'Select turnover'}
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Select turnover')}>Select turnover</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £0 - £40,000')}>£0 - £40,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £40,001 - £90,000')}>£40,001 - £90,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £90,001 - £200,000')}>£90,001 - £200,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £200,001 - £300,000')}>£200,001 - £300,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £300,001 - £400,000')}>£300,001 - £400,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £400,001 - £500,000')}>£400,001 - £500,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £500,001 - £600,000')}>£500,001 - £600,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £600,001 - £700,000')}>£600,001 - £700,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £700,001 - £800,000')}>£700,001 - £800,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £800,001 - £900,000')}>£800,001 - £900,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £900,001 - £1,000,000')}>£900,001 - £1,000,000</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('turnover', 'Turnover: £1,000,000+')}>£1,000,000+</a></li>
                                                </ul>
                                            </div>

                                            <div className="dropdown extra">
                                                {errors.payroll ? <div className="error-message1">{errors.payroll}</div> : <div className="empty1"></div>}
                                                <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    {formData.payroll || 'Need payroll managing?'}
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('payroll')}>Need payroll managing?</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('payroll', "payroll: No", false)}>No</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('payroll', 'payroll: Weekly', true)}>Weekly</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('payroll', 'payroll: Fortnightly', true)}>Fortnightly</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('payroll', 'payroll: Monthly', true)}>Monthly</a></li>
                                                </ul>

                                            </div>
                                            {payroll && (
                                                <div className="subfield">
                                                    {errors.employees ? <div className="error-message1">{errors.employees}</div> : <div className="empty1"></div>}
                                                    <input
                                                        className='pop-input-left'
                                                        placeholder='Enter number of Employees'
                                                        type="text"
                                                        name="employees"
                                                        value={formData.employees || ''}
                                                        onChange={handleChange}
                                                    // Required when payroll is 'Yes'
                                                    />

                                                </div>
                                            )}
                                            <div className="dropdown extra">
                                                {errors.vatReturns ? <div className="error-message1">{errors.vatReturns}</div> : <div className="empty1"></div>}
                                                <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    {formData.vatReturns || 'Need VAT Returns Completing?'}
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('vatReturns', "Need VAT Returns Completing?", true)}>Do You Need VAT Returns Completing?</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('vatReturns', 'VAT Returns: Yes')}>Yes</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('vatReturns', 'VAT Returns: No')}>No</a></li>
                                                </ul>

                                            </div>


                                        </div>
                                        <div className="pop-input-block">
                                            <div className="dropdown extra">
                                                {errors.bookkeeping ? <div className="error-message1">{errors.bookkeeping}</div> : <div className="empty1"></div>}
                                                <button
                                                    className="btn dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    {formData.bookkeeping || 'Need Bookkeeping?'}
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('bookkeeping')}>Need Bookkeeping?</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('bookkeeping', 'Bookkeeping: Yes', true)}>Yes</a></li>
                                                    <li><a className="dropdown-item" onClick={() => handleDropdownChange('bookkeeping', 'Bookkeeping: No', false)}>No</a></li>
                                                </ul>

                                            </div>
                                            {needsBookkeeping && (
                                                <div className="subfield">
                                                    {errors.transactionsCount ? <div className="error-message1">{errors.transactionsCount}</div> : <div className="empty1"></div>}
                                                    <input
                                                        className='pop-input-left'
                                                        placeholder='Enter number of Transactions'
                                                        type="text"
                                                        name="transactionsCount"
                                                        value={formData.transactionsCount || ''}
                                                        onChange={handleChange}
                                                    // Make this required when bookkeeping is 'Yes'
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                {errors.name ? <div className="error-message1">{errors.name}</div> : <div className="empty1"></div>}
                                                <input
                                                    className='pop-input-left'

                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                {errors.email ? <div className="error-message1">{errors.email}</div> : <div className="empty1"></div>}

                                                <input
                                                    className='pop-input-left'

                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter your email"
                                                    value={formData.email}
                                                    onChange={handleChange}

                                                />
                                            </div>

                                            <div>
                                                {errors.phoneNumber ? <div className="error-message1">{errors.phoneNumber}</div> : <div className="empty1"></div>}
                                                <input
                                                    className='pop-input-left'
                                                    type="tel"
                                                    name="phoneNumber"
                                                    placeholder="Enter your phone number"
                                                    value={formData.phoneNumber}
                                                    onChange={handleChange}


                                                />
                                            </div>



                                        </div>

                                    </div>

                                </div>
                                <div className="pop-icon-btn">
                                    <div className="pop-btn">
                                        <i className="fa-solid fa-calculator calculator-3"></i>
                                        <button className='pop-btn'>Get An Instant Quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form >
                )}
            </div>
        </div>
    );
};

export default Popup;
