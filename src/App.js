// src/App.js
import React, { useState } from 'react';
import EmailList from './components/EmailList';
import EmailBody from './components/EmailBody';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [selectedEmailId, setSelectedEmailId] = useState(null);
  const [filter, setFilter] = useState('all');

  return (
    <div className="app-container">
      <Filter setFilter={setFilter} />
      <div className="app-content">
        <EmailList onEmailSelect={setSelectedEmailId} filter={filter} />
        {selectedEmailId && <EmailBody selectedEmailId={selectedEmailId} />}
      </div>
    </div>
  );
}

export default App;
