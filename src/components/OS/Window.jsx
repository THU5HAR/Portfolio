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
                            title="Minimize"
                        >
                            <svg viewBox="0 0 10 10" fill="currentColor" width="12" height="12"><rect width="10" height="1" y="4.5" /></svg>
                        </button>
                        <button
                            className="control-btn maximize"
                            onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized) }}
                            onTouchStart={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized) }}
                            title="Maximize"
                        >
                            {isMaximized ? (
                                <svg viewBox="0 0 10 10" stroke="currentColor" fill="none" width="12" height="12">
                                    <path d="M2.5,2.5 h4 v4 h-4 z" />
                                    <path d="M4.5,2.5 v-1.5 h4 v4 h-1.5" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 10 10" stroke="currentColor" fill="none" width="12" height="12">
                                    <path d="M1.5,1.5 h7 v7 h-7 z" />
                                </svg>
                            )}
                        </button>
                        <button
                            className="control-btn close"
                            onClick={(e) => { e.stopPropagation(); onClose() }}
                            onTouchStart={(e) => { e.stopPropagation(); onClose() }}
                            title="Close"
                        >
                            <svg viewBox="0 0 10 10" stroke="currentColor" fill="none" width="12" height="12">
                                <path d="M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" strokeWidth="1.2" />
                            </svg>
                        </button>
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
