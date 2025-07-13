import React from 'react';
import ChatBot from './ChatBot';
import './Assistant.css';

const Assistant = () => {
  return (
    <div className="assistant-page">
      <h1 className="assistant-title">🤖 AI Assistant</h1>
      <p className="assistant-description">
        Ask coding or music-production questions and get context-aware answers powered by AI.
      </p>
      <ChatBot />
    </div>
  )
}

export default Assistant
