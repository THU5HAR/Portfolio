import { useState, useEffect } from 'react';

export default function ClockApp() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: 'white',
            fontFamily: 'Ubuntu, sans-serif'
        }}>
            <h1 style={{ fontSize: '5rem', margin: 0 }}>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </h1>
            <h2 style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.7)', margin: '10px 0 0' }}>
                {time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </h2>
        </div>
    );
}
