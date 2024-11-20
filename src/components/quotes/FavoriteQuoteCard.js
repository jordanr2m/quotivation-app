const FavoriteQuoteCard = ({ quote, removeFromFavorites, listPosition }) => {
    return (
        // Using CSS to display a data atribute containing the list number
        <li className="quote-card" data-list-position={listPosition}>
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
