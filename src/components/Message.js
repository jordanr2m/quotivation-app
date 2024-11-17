const Message = ({ messageText, removeMessage }) => {
    return (
        <div className="message">
            <p>{messageText}</p>
            <button
                className="close-message"
                aria-label="Delete from favorites"
                onClick={removeMessage}
            >
                x
            </button>
        </div>
    )
}

export default Message
