import { useState, createContext, useContext } from "react";

export const Usercontext = createContext();
export function Level03({ message1 }) {
    
    const [reply, setReply] = useState("");
    const handleReply = () => {
        // Update the context here
        userContext.value = reply
        alert("Reply sent!")
        console.log("test")
    }
    return (
        <div>
            Level03
            <p>Message for JSD8: {message1}</p>
            <textarea
                className="mt-4 p-2 w-full  bg-transparent border"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type your reply here..."
            />
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => { handleReply }}
            >
                Send Reply
            </button>
        </div>
    )
}