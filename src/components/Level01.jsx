import { Level02 } from "./Level02"
export default function Level01({ message1, handleReply }) {
    return (
        <>
            
            <Level02 message2={message1} handleReply={handleReply} />
        </>
    )
}