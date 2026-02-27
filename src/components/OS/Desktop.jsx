import { useState, useEffect } from 'react';
import './Desktop.css';
import Window from './Window';

import Hero from '../Hero';
import About from '../About';
import Skills from '../Skills';
import Experience from '../Experience';
import Projects from '../Projects';
import Certifications from '../Certifications';
import Education from '../Education';
import Contact from '../Contact';

const apps = [
    { id: 'about', title: 'About Me', icon: '👤', component: <><Hero /><About /></> },
    { id: 'experience', title: 'Experience', icon: '💼', component: <Experience /> },
    { id: 'projects', title: 'Projects', icon: '🚀', component: <Projects /> },
    { id: 'skills', title: 'Skills', icon: '🛠️', component: <Skills /> },
    { id: 'education', title: 'Education', icon: '🎓', component: <><Education /><Certifications /></> },
    { id: 'contact', title: 'Contact', icon: '📬', component: <Contact /> },
];

const Desktop = () => {
    const [openWindows, setOpenWindows] = useState([]);
    const [activeWindow, setActiveWindow] = useState(null);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const openApp = (appId) => {
        if (!openWindows.includes(appId)) {
            setOpenWindows([...openWindows, appId]);
        }
        setActiveWindow(appId);
    };

    const closeApp = (appId) => {
        setOpenWindows(openWindows.filter((id) => id !== appId));
        if (activeWindow === appId) {
            setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2] : null);
        }
    };

    const focusApp = (appId) => {
        setActiveWindow(appId);
    };

    return (
        <div className="os-desktop">
            {/* Top Bar */}
            <div className="os-topbar">
                <div className="topbar-left">
                    <span className="topbar-item">Activities</span>
                </div>
                <div className="topbar-center">
                    <span className="topbar-item">{time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="topbar-right">
                    <span className="topbar-item">🔋 100%</span>
                    <span className="topbar-item">▼</span>
                </div>
            </div>

            {/* Dock */}
            <div className="os-dock">
                {apps.map((app) => (
                    <div
                        key={app.id}
                        className={`dock-icon ${openWindows.includes(app.id) ? 'open' : ''} ${activeWindow === app.id ? 'active' : ''}`}
                        onClick={() => openApp(app.id)}
                        title={app.title}
                    >
                        <div className="icon-emoji">{app.icon}</div>
                        {openWindows.includes(app.id) && <div className="dock-indicator" />}
                    </div>
                ))}
            </div>

            {/* Windows Layer */}
            <div className="os-windows">
                {openWindows.map((appId) => {
                    const app = apps.find(a => a.id === appId);
                    return (
                        <Window
                            key={app.id}
                            title={app.title}
                            isActive={activeWindow === app.id}
                            onClose={() => closeApp(app.id)}
                            onFocus={() => focusApp(app.id)}
                        >
                            {app.component}
                        </Window>
                    );
                })}
            </div>
        </div>
    );
};

export default Desktop;
