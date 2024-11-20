import { useEffect } from "react"

const Message = ({ messageText, removeMessage }) => {
    // Remove popup message after 1.5s
    // Anne uses window to be safe, but it isn't necessary
    // You could also pass down a delay parameter and use that for the timeout length, making the function more flexible by having dif timeout lengths
    useEffect(() => {
        const messageTimeout = window.setTimeout(() => {
            removeMessage()
        }, 2000);
        // Cleanup function
        return () => window.clearTimeout(messageTimeout);
    }); // No dependency needed (rare use case)

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
