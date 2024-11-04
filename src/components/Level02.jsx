import { Level03 } from "./level03"
export function Level02({ message1, handleReply }) {
    return (
        <>
            <Level03 message2={message1} handleReply={handleReply} />
        </>
    )
}