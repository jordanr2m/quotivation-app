import QuoteCard from "./QuoteCard"
import CategoryForm from "./CategoryForm"

const Quotes = ({ quotes, category, categories, handleCategoryChange, addToFavorites, favoriteQuotes, removeFromFavorites }) => {
    return (
        <section className="all-quotes">
            <div className="wrapper quotes">
                <div className="category-header">
                    <h2>Pick your Favorite Quotes Below</h2>
                    {/* <p>{category === "All" ? `You have a collection of ${quotes.length} great quotes!` : `You have a collection of ${quotes.length} great ${category} ${quotes.length === 1 ? "quote" : "quotes"}!`}</p> */}
                    <p>
                        You have {quotes.length > 0 && "a collection of"} {quotes.length} great {category !== "All" && category} {quotes.length === 1 ? "quote" : "quotes"}!
                    </p>
                    <CategoryForm
                        category={category}
                        categories={categories}
                        handleCategoryChange={handleCategoryChange}
                    />
                </div>
                {quotes.map(quote => (
                    <QuoteCard
                        key={quote.id}
                        quote={quote}
                        addToFavorites={addToFavorites}
                        favoriteQuotes={favoriteQuotes}
                        removeFromFavorites={removeFromFavorites}
                    />
                ))}
            </div>
        </section>
    )
}

export default Quotes
