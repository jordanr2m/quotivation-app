const QuoteCard = ({ quote }) => {
    return (
        <article className="quote-card">
            <div>
                <p className="categories">{quote.categories.map((category, index) => <span className="category" key={index}>{category}</span>)}</p>
                <h3>{quote.text}</h3>
            </div>
            <footer>
                <p className="author">{quote.author}</p>
            </footer>
        </article>
    )
}

export default QuoteCard
