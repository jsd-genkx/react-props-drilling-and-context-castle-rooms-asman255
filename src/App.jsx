import { useState } from 'react'
import './App.css'
import Level01 from './components/level01';

function App() {
  const [replyMessage, setReplyMessage] = useState("");

  const handleReply = (message) => {
    setReplyMessage(message);
  };

  const message1 = "Do you love React?";

  return (
    <div>
      <p>Message for JSD8: {message1}</p>
      <p>
        Reply from the level03:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Level01 message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default App
