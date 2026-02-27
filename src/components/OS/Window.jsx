import { useState } from 'react';
import Draggable from 'react-draggable';
import './Window.css';

const Window = ({ title, isActive, onClose, onFocus, children }) => {
    const [isMaximized, setIsMaximized] = useState(false);

    return (
        <Draggable
            handle=".window-header"
            bounds="parent"
            disabled={isMaximized}
            onMouseDown={onFocus}
            defaultPosition={{ x: 100, y: 100 }}
        >
            <div
                className={`os-window ${isActive ? 'active' : ''} ${isMaximized ? 'maximized' : ''}`}
                onClick={onFocus}
            >
                <div className="window-header">
                    <div className="window-title">{title}</div>
                    <div className="window-controls">
                        <button className="control-btn minimize" onClick={(e) => { e.stopPropagation(); /* just keep active state handler running */ }}></button>
                        <button className="control-btn maximize" onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized) }}></button>
                        <button className="control-btn close" onClick={(e) => { e.stopPropagation(); onClose() }}></button>
                    </div>
                </div>
                <div className="window-content">
                    {children}
                </div>
            </div>
        </Draggable>
    );
};

export default Window;
