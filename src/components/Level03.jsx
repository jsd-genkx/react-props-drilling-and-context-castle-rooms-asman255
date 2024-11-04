import { useState } from "react";
export function Level03({ message1, handleReply }) {
    const [reply, setReply] = useState("");
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
                onClick={() => handleReply(reply)}
            >
                Send Reply
            </button>
        </div>
    )
}