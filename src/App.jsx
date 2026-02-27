import React, { useState, useEffect } from 'react';
import Desktop from './components/OS/Desktop';
import './App.css';

import BootLoader from './components/OS/BootLoader';

function App() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 3800); // Wait almost 4 seconds before removing loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App os-environment">
      {isBooting && <BootLoader />}
      {!isBooting && <Desktop />}
    </div>
  );
}

export default App;
