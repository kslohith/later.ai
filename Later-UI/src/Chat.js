import React, { useState } from 'react';
import './chat.css'; 
import axios from 'axios'; 


function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hello, ask me anything!", user: 'ChatGPT' },
    // { text: "I'd like to know more about your services.", user: 'user' },
    // { text: "Sure, we offer a variety of services including web development, mobile app development, and AI solutions.", user: 'ChatGPT' },
    // { text: "That sounds great! Can you tell me more about your AI solutions?", user: 'user' },
    // { text: "Of course! Our AI solutions include natural language processing, computer vision, and recommendation systems.", user: 'ChatGPT' },
    // { text: "That's exactly what I'm looking for. How do I get started?", user: 'user' },
    // { text: "You can get started by contacting our sales team. They will guide you through the process.", user: 'ChatGPT' },
  ]);

  const [inputText, setInputText] = useState('');


  const addMessage = () => {
    const newMessage = {
      text: inputText,
      user: 'user'
    };
    setMessages(messages => [...messages, newMessage]);
    // setMessages(messages.push(newMessage));
    axios.post('https://later-ai-backend.onrender.com/searchNotes', { 'query': inputText, 'mode': 'no-cors' })
        .then(response => {
          console.log('Message sent:', response.data.choices[0].text);
          // Handle response if needed
          const newMessage2 = {
            text: response.data.choices[0].text,
            user: 'ChatGPT'
          };
          setMessages(messages => [...messages, newMessage2]);
          // setMessages(messages.push(newMessage2))
        })
        .catch(error => {
          console.error('Error sending message:', error);
        });
        setInputText("");
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="messages-inner">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user}`}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="chat-input">
      <input
          type="text"
          placeholder="Type your query here"
          value={inputText}
          onChange={handleInputChange}
        />
        <button className="chat-input-button" onClick={addMessage}>Ask</button>
      </div>
    </div>
  );
}

export default Chat;
