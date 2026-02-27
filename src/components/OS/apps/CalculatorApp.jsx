import { useState } from 'react';

export default function CalculatorApp() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button
                    onClick={() => updateCalc(i.toString())}
                    key={i}
                    style={btnStyle}
                >
                    {i}
                </button>
            )
        }
        return digits;
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc == '') return;
        const value = calc.slice(0, -1);
        setCalc(value);
    }

    const clearAll = () => {
        setCalc("");
        setResult("");
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',
            background: 'var(--bg-dark)'
        }}>
            <div style={{
                width: '300px', backgroundColor: '#333', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
            }}>
                <div style={{
                    padding: '20px', textAlign: 'right', backgroundColor: '#222', color: 'white', minHeight: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center'
                }}>
                    <div style={{ fontSize: '1rem', color: '#888' }}>{result ? result : ''}&nbsp;</div>
                    <div style={{ fontSize: '2.5rem' }}>{calc || "0"}</div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '3', display: 'flex', flexWrap: 'wrap' }}>
                        <button onClick={clearAll} style={{ ...btnStyle, width: '100%', backgroundColor: '#e95420' }}>C</button>
                        {createDigits()}
                        <button onClick={() => updateCalc('.')} style={btnStyle}>.</button>
                        <button onClick={() => updateCalc('0')} style={btnStyle}>0</button>
                        <button onClick={calculate} style={{ ...btnStyle, backgroundColor: '#772953' }}>=</button>
                    </div>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', backgroundColor: '#e95420' }}>
                        <button onClick={deleteLast} style={opBtnStyle}>DEL</button>
                        <button onClick={() => updateCalc('/')} style={opBtnStyle}>/</button>
                        <button onClick={() => updateCalc('*')} style={opBtnStyle}>x</button>
                        <button onClick={() => updateCalc('-')} style={opBtnStyle}>-</button>
                        <button onClick={() => updateCalc('+')} style={opBtnStyle}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const btnStyle = {
    flex: '1 0 33.33%',
    height: '60px',
    backgroundColor: '#444',
    color: '#fff',
    border: '1px solid #222',
    fontSize: '20px',
    cursor: 'pointer',
    outline: 'none',
    transition: '0.2s'
};

const opBtnStyle = {
    flex: '1',
    height: '60px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    border: '1px solid rgba(0,0,0,0.2)',
    fontSize: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    outline: 'none'
};
