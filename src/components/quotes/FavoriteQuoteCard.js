const FavoriteQuoteCard = ({ quote, removeFromFavorites }) => {
    return (
        <li className="quote-card">
            <button
                className="close-quote"
                aria-label="Delete from favorites"
                onClick={() => removeFromFavorites(quote.id)}
            >
                x
            </button>
            <h3>{quote.text}</h3>
            <p>{quote.author}</p>
        </li>
    )
}

export default FavoriteQuoteCard
