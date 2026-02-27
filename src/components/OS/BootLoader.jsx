import React from 'react';
import './BootLoader.css';

const BootLoader = () => {
    return (
        <div className="boot-loader">
            <div className="boot-content">
                <img src="/tsb-logo.png" alt="TSB Logo" className="boot-logo" />
                <div className="boot-spinner"></div>
                <h1 className="boot-text">Welcome to Thushar's world</h1>
            </div>
        </div>
    );
};

export default BootLoader;
