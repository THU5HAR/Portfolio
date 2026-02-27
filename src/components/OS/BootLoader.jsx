import React from 'react';
import './BootLoader.css';
import tsbLogo from '../../assets/tsb-logo.png';

const BootLoader = () => {
    return (
        <div className="boot-loader">
            <div className="boot-content">
                <div className="boot-logo-container">
                    <div className="boot-logo-glow"></div>
                    <img src={tsbLogo} alt="TSB Logo" className="boot-logo" />
                </div>
                <div className="boot-spinner"></div>
                <h1 className="boot-text">Welcome to Thushar's world</h1>
            </div>
        </div>
    );
};

export default BootLoader;
