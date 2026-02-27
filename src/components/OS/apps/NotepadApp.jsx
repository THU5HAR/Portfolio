import { useState } from 'react';

export default function NotepadApp() {
    const [text, setText] = useState('Welcome to Notepad!\n\nYou can type your notes here...');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#fff' }}>
            <div style={{ padding: '5px 10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc', fontSize: '13px', display: 'flex', gap: '15px' }}>
                <span style={{ cursor: 'pointer' }}>File</span>
                <span style={{ cursor: 'pointer' }}>Edit</span>
                <span style={{ cursor: 'pointer' }}>View</span>
            </div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    flexGrow: 1,
                    border: 'none',
                    padding: '10px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    resize: 'none',
                    outline: 'none'
                }}
            />
        </div>
    );
}
