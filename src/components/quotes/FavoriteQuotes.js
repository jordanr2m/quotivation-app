import FavoriteQuoteCard from "./FavoriteQuoteCard";

const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {
    return (
        <section className="favorite-quotes">
            <div className="wrapper quotes">
                <h3>Top 3 favorite quotes</h3>
                {/* {favoriteQuotes.length > 0 && JSON.stringify(favoriteQuotes)} */}
                {favoriteQuotes.length > 0 && (
                    <ul>
                        {favoriteQuotes.map(quote => (
                            <FavoriteQuoteCard
                                quote={quote}
                                key={quote.id}
                                removeFromFavorites={removeFromFavorites}
                            />
                        ))}
                    </ul>
                )}
    
                {favoriteQuotes.length < maxFaves && (
                    <div className="favorite-quotes-description">
                        <p>
                            You can add {maxFaves - favoriteQuotes.length} more {maxFaves - favoriteQuotes.length === 1 ? "quote" : "quotes"} to your top three favorites by selecting from the options below. <br />
                            Once you choose, they will appear here.
                        </p>
                    </div>
                )}

            </div>
        </section>
    )
}

export default FavoriteQuotes
