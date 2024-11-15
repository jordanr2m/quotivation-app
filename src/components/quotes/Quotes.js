import QuoteCard from "./QuoteCard"
import CategoryForm from "./CategoryForm"

const Quotes = ({ quotes, category, categories, handleCategoryChange, addToFavorites }) => {
    return (
        <section className="all-quotes">
            <div className="wrapper quotes">
                <div className="category-header">
                    <h2>Pick your Favorite Quotes Below</h2>
                    <p>Browse through your collection of quotes</p>
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
                    />
                ))}
            </div>
        </section>
    )
}

export default Quotes
