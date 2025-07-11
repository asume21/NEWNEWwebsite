import React, { useState, useRef, useEffect } from 'react'
import './ChatBot.css'

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I\'m your CodedSwitch assistant. How can I help?' }
  ])
  const messagesEndRef = useRef(null)

  const toggle = () => setOpen(!open)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(scrollToBottom, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg = { sender: 'user', text: input.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    // Demo bot response
    setTimeout(() => {
      const botMsg = { sender: 'bot', text: generateDemoResponse(userMsg.text) }
      setMessages(prev => [...prev, botMsg])
    }, 800)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  const generateDemoResponse = (prompt) => {
    const lower = prompt.toLowerCase()
    if (lower.includes('optimize')) {
      return 'Consider memoization or using a cache for repeated calls.'
    }
    if (lower.includes('hello') || lower.includes('hi')) {
      return 'Hey there! 👋 How can I assist you today?'
    }
    return "That's interesting! I\'ll have more insights soon."
  }
  return (
    <>
      <button className="chatbot-toggle" onClick={toggle} aria-label="Open chat bot">
        💬
      </button>
      {open && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>AI Assistant</span>
            <button className="chatbot-close" onClick={toggle} aria-label="Close chat bot">✖</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot
