import React, { useState, useEffect } from 'react';
import './Cards2.css'
const Cards2 = ({ title, des, num, position }) => {
    const [isReadMore, setIsReadMore] = useState(false);
    const [previewLength, setPreviewLength] = useState(150);

    // useEffect(() => {
    //     const updatePreviewLength = () => {
    //         const width = window.innerWidth;
    //         if (width > 1200) {
    //             setPreviewLength(des.length);
    //         } else if (width > 900 && width <= 1200) {
    //             setPreviewLength(120);
    //         } else if (width > 500 && width <= 900) {
    //             setPreviewLength(170);
    //         } else {
    //             setPreviewLength(100);
    //         }
    //     };

    //     updatePreviewLength();
    //     window.addEventListener('resize', updatePreviewLength);

    //     return () => {
    //         window.removeEventListener('resize', updatePreviewLength);
    //     };
    // }, [des.length]);

    // const toggleReadMore = () => {
    //     setIsReadMore(!isReadMore);
    // };

    // const previewText = des.length > previewLength ? des.substring(0, previewLength) + "..." : des;

    return (
        <ul className="page-card-shadow4" style={{ transform: `translateX(${position})` }}>
            <p>{num}</p>
            <h2>{title}</h2>
            <li>
                {des}
                {/* {isReadMore ? des : previewText} */}
                {/* <span onClick={toggleReadMore} className="read-more-btn">
                    {isReadMore ? 'Read Less' : 'Read More'}
                    {des.length > previewLength ? (isReadMore ? 'Read Less' : 'Read More') : ''}
                </span> */}
            </li>
        </ul>
    );
};

export default Cards2;
