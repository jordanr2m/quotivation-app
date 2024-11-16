import { IoHeartOutline, IoHeart } from "react-icons/io5";
// import { Heart } from "react-feather";

const QuoteCard = ({ quote, addToFavorites, favoriteQuotes, removeFromFavorites }) => {
    const alreadyFavorite = favoriteQuotes.find(favorite => favorite.id === quote.id);
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
                        <IoHeart
                            onClick={() => removeFromFavorites(quote.id)}
                        />
                    ) : (
                        <IoHeartOutline
                            onClick={() => addToFavorites(quote.id)}
                        />
                    )}
                </p>
            </footer>
        </article>
    )
}

export default QuoteCard
