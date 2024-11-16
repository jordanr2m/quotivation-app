import { IoHeartOutline, IoHeart } from "react-icons/io5";
// import { Heart } from "react-feather";

const QuoteCard = ({ quote, addToFavorites, favoriteQuotes, removeFromFavorites }) => {
    const alreadyFavorite = favoriteQuotes.find(favorite => favorite.id === quote.id); // think of this as returnin "yes" or "no"

    // SKILLCRUSH way of updating Heart UI
    // const favoriteStyle = alreadyFavorite ? "#333" : "";
    // <Heart style={{ fill: favoriteStyle }} />

    return (
        <article className="quote-card">
            <div>
                <p className="categories">
                    {quote.categories.map(category => (
                        <span className="category" key={category}>
                            {category}
                        </span>
                    ))}
                </p>
                <h3>{quote.text}</h3>
            </div>
            <footer>
                <p className="author">{quote.author}</p>
                <p className="add-favorite">
                    {alreadyFavorite ? (
                        <button
                            aria-label="Delete from favorites"
                            onClick={() => removeFromFavorites(quote.id)}
                        >
                            <IoHeart />
                        </button>

                    ) : (
                        <button
                            aria-label="Add to favorites"
                            onClick={() => addToFavorites(quote.id)}
                        >
                            <IoHeartOutline />
                        </button>
                    )}
                </p>
            </footer>
        </article>
    )
}

export default QuoteCard
