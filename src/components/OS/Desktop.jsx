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

import ClockApp from './apps/ClockApp';
import NotepadApp from './apps/NotepadApp';
import CalculatorApp from './apps/CalculatorApp';
import TerminalGames from './apps/TerminalGames';

const apps = [
    { id: 'about', title: 'About Me', icon: '👤', component: <><Hero /><About /></>, type: 'regular' },
    { id: 'experience', title: 'Experience', icon: '💼', component: <Experience />, type: 'regular' },
    { id: 'projects', title: 'Projects', icon: '🚀', component: <Projects />, type: 'regular' },
    { id: 'skills', title: 'Skills', icon: '🛠️', component: <Skills />, type: 'regular' },
    { id: 'education', title: 'Education', icon: '🎓', component: <><Education /><Certifications /></>, type: 'regular' },
    { id: 'contact', title: 'Contact', icon: '📬', component: <Contact />, type: 'regular' },
    { id: 'clock', title: 'Clock', icon: '⏰', component: <ClockApp />, type: 'system' },
    { id: 'notepad', title: 'Notepad', icon: '📝', component: <NotepadApp />, type: 'system' },
    { id: 'calc', title: 'Calculator', icon: '🧮', component: <CalculatorApp />, type: 'system' },
    { id: 'games', title: 'Terminal Games', icon: '👾', component: <TerminalGames />, type: 'system' },
    { id: 'linkedin', title: 'LinkedIn', icon: '💼', type: 'link', url: 'https://www.linkedin.com/in/thushar-sathish-bhandary-238a08255' },
    { id: 'instagram', title: 'Instagram', icon: '📸', type: 'link', url: 'https://instagram.com/' },
    { id: 'github', title: 'GitHub', icon: '🐙', type: 'link', url: 'https://github.com/THU5HAR' }
];

const Desktop = () => {
    const [openWindows, setOpenWindows] = useState([]);
    const [activeWindow, setActiveWindow] = useState(null);
    const [time, setTime] = useState(new Date());
    const [iconSize, setIconSize] = useState('medium');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const openApp = (appId) => {
        const app = apps.find(a => a.id === appId);
        if (app?.type === 'link') {
            window.open(app.url, '_blank');
            return;
        }
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
        <div className="os-desktop" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
            {/* Top Bar */}
            <div className="os-topbar">
                <div className="topbar-left" style={{ position: 'relative' }}>
                    <span
                        className="topbar-item"
                        onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen) }}
                    >
                        Menu
                    </span>
                    {isMenuOpen && (
                        <div className="os-dropdown-menu" onClick={e => e.stopPropagation()}>
                            <div className="menu-section-title">SYSTEM APPS</div>
                            {apps.filter(app => app.type === 'system').map(app => (
                                <div key={app.id} className="menu-app-item" onClick={() => { openApp(app.id); setIsMenuOpen(false); }}>
                                    <span className="menu-icon">{app.icon}</span> {app.title}
                                </div>
                            ))}
                            <div className="menu-divider"></div>
                            <div className="menu-section-title">PORTFOLIO APPS</div>
                            {apps.filter(app => app.type === 'regular').map(app => (
                                <div key={app.id} className="menu-app-item" onClick={() => { openApp(app.id); setIsMenuOpen(false); }}>
                                    <span className="menu-icon">{app.icon}</span> {app.title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="topbar-center">
                    <span className="topbar-item">{time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="topbar-right">
                    <span className="topbar-item" title="Toggle Icon Size" onClick={() => setIconSize(s => s === 'small' ? 'medium' : s === 'medium' ? 'large' : 'small')}>
                        Size: {iconSize === 'small' ? 'S' : iconSize === 'medium' ? 'M' : 'L'}
                    </span>
                    <span className="topbar-item">🔋 100%</span>
                    <span className="topbar-item">▼</span>
                </div>
            </div>

            {/* Desktop Icons */}
            <div className={`desktop-icons-container size-${iconSize}`}>
                {apps.map((app) => (
                    <div
                        key={app.id}
                        className={`desktop-icon ${openWindows.includes(app.id) ? 'open' : ''} ${activeWindow === app.id ? 'active' : ''}`}
                        onDoubleClick={() => openApp(app.id)}
                        onClick={() => setActiveWindow(app.id)}
                        title={app.title}
                    >
                        <div className="icon-emoji">{app.icon}</div>
                        <div className="icon-label">{app.title}</div>
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
