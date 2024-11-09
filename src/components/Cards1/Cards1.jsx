import React, { useState, useEffect } from 'react';
import './Cards1.css'
const Cards1 = ({ title, des, num, position }) => {

    return (
        <ul className="personal-card" style={{ transform: `translateX(${position}px)` }}>
            <p>{num}</p>
            <h2>{title}</h2>
            <li>
                {des}

            </li>
        </ul>
    );
};

export default Cards1;
