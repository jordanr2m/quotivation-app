import QuoteCard from "./QuoteCard"
import CategoryForm from "./CategoryForm"

const Quotes = ({ quotes, category, categories, handleCategoryChange }) => {
    return (
        <section className="all-quotes">
            <div className="wrapper quotes">
                <div className="category-header">
                    <p>Browse through your collection of quotes</p>
                    <CategoryForm
                        category={category}
                        categories={categories}
                        handleCategoryChange={handleCategoryChange}
                    />
                </div>
                {quotes.map(quote => (
                    <QuoteCard key={quote.id} quote={quote} />
                ))}
            </div>
        </section>
    )
}

export default Quotes
