import { useState } from 'react';
import Draggable from 'react-draggable';
import './Window.css';

const Window = ({ title, isActive, onClose, onFocus, children }) => {
    const [isMaximized, setIsMaximized] = useState(false);

    return (
        <Draggable
            handle=".window-header"
            cancel=".window-controls"
            bounds="parent"
            disabled={isMaximized}
            onMouseDown={onFocus}
            defaultPosition={{ x: window.innerWidth > 600 ? 100 : 10, y: window.innerWidth > 600 ? 100 : 20 }}
        >
            <div
                className={`os-window ${isActive ? 'active' : ''} ${isMaximized ? 'maximized' : ''}`}
                onClick={onFocus}
            >
                <div className="window-header">
                    <div className="window-title">{title}</div>
                    <div className="window-controls">
                        <button
                            className="control-btn minimize"
                            onClick={(e) => { e.stopPropagation(); }}
                            onTouchStart={(e) => { e.stopPropagation(); }}
                        ></button>
                        <button
                            className="control-btn maximize"
                            onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized) }}
                            onTouchStart={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized) }}
                        ></button>
                        <button
                            className="control-btn close"
                            onClick={(e) => { e.stopPropagation(); onClose() }}
                            onTouchStart={(e) => { e.stopPropagation(); onClose() }}
                        ></button>
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
