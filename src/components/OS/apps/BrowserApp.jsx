import React, { useState } from 'react';

export default function BrowserApp() {
    const [url, setUrl] = useState('https://example.com');
    const [inputUrl, setInputUrl] = useState('https://example.com');

    const handleSubmit = (e) => {
        e.preventDefault();
        let finalUrl = inputUrl;
        if (!finalUrl.startsWith('http')) finalUrl = 'https://' + finalUrl;
        setUrl(finalUrl);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#f9f9f9' }}>
            <div style={{ display: 'flex', padding: '8px', gap: '8px', alignItems: 'center', backgroundColor: '#e8e8e8', borderBottom: '1px solid #ccc' }}>
                <button
                    style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', padding: '0 5px' }}
                    onClick={() => setUrl('https://example.com')}
                >
                    🏠
                </button>
                <form onSubmit={handleSubmit} style={{ flexGrow: 1, display: 'flex' }}>
                    <input
                        type="text"
                        value={inputUrl}
                        onChange={e => setInputUrl(e.target.value)}
                        style={{ flexGrow: 1, padding: '5px 10px', borderRadius: '15px', border: '1px solid #ccc', outline: 'none' }}
                        placeholder="Type a URL..."
                    />
                </form>
            </div>
            <div style={{ flexGrow: 1, backgroundColor: '#fff', position: 'relative' }}>
                {/* iFrames block unsecure sources, but we'll simulate a browser the best we can */}
                <iframe
                    src={url}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="Browser"
                    sandbox="allow-same-origin allow-scripts allow-forms"
                />
            </div>
        </div>
    );
}
