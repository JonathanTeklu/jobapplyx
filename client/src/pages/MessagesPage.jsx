// src/pages/MessagesPage.jsx
import React, { useState } from 'react';

const sampleConversations = [
  {
    id: 1,
    name: 'Alex Johnson',
    message: 'Yo, did you see my last post?',
    time: '2m ago',
  },
  {
    id: 2,
    name: 'Jamie Rivera',
    message: 'We should collab on that project fr',
    time: '1h ago',
  },
];

const MessagesPage = () => {
  const [messages, setMessages] = useState(sampleConversations);

  return (
    <div className="signup-container">
      <h2 style={{ textAlign: 'center' }}>Messages</h2>
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message-card">
            <div>
              <strong>{msg.name}</strong>
              <p style={{ margin: '0.25rem 0' }}>{msg.message}</p>
            </div>
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
