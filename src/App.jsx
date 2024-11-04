import { useState, useContext } from 'react'
import './App.css'
import Level01 from './components/level01';
import { Usercontext } from './components/level03';



function App() {
  // const [replyMessage, setReplyMessage] = useState("");
  const user = useContext(Usercontext);
  const handleReply = (message) => {
    setReplyMessage(message);
  };

  const message1 = "context : Do you love React?";
<console className="log">user</console>
  return (
    <div>
      <p>Message for JSD8: {message1} {user}</p>
      <p>
        Reply from the level03:{" "}
        <span className="text-red">
          {/* {replyMessage ? replyMessage : "Waiting for a reply..."} */}
        </span>
      </p>
      <Level01 />
    </div>
  );
}

export default App
