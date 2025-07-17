// Basic messaging UI - merge conflicts resolved
import React, { useState, useEffect, useCallback } from 'react';

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [to, setTo] = useState('');
  const [content, setContent] = useState('');
  const token = localStorage.getItem('token');

  const fetchMessages = useCallback(async () => {
    if (!to) return;
    try {
      const res = await fetch(`https://snagged.onrender.com/api/messages/${to}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error('fetch messages error', err);
    }
  }, [token, to]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://snagged.onrender.com/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ to, content }),
      });
      setContent('');
      fetchMessages();
    } catch (err) {
      console.error('send message error', err);
    }
  };

  return (
    <div className="signup-container">
      <h2 style={{ textAlign: 'center' }}>Messages</h2>
      <input
        type="text"
        placeholder="Recipient user ID"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg._id} className="message-card">
            <div>
              <strong>{msg.from === to ? 'Them' : 'You'}</strong>
              <p style={{ margin: '0.25rem 0' }}>{msg.content}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className="primary-btn" type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessagesPage;
