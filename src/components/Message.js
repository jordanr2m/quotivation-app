import { useEffect } from "react"

const Message = ({ messageText, removeMessage }) => {
    // Remove popup message after 1.5s
    useEffect(() => {
        const messageTimeout = window.setTimeout(() => {
            removeMessage()
        }, 1500);
        // Cleanup function
        return () => window.clearTimeout(messageTimeout);
    }); // No dependency needed

    return (
        <div className="message">
            <p>{messageText}</p>
            <button
                className="close-message"
                aria-label="Close message"
                onClick={removeMessage}
            >
                x
            </button>
        </div>
    )
}

export default Message
