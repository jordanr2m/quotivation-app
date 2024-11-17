const Message = () => {
    return (
        <div className="message">
            <p></p>
            <button
                className="close-quote"
                aria-label="Delete from favorites"
                // onClick={() => removeFromFavorites(quote.id)}
            >
                x
            </button>
        </div>
    )
}

export default Message
