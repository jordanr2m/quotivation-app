import QuoteCard from "./QuoteCard"

const Quotes = ({ quotes }) => {
  return (
    <section className="all-quotes">
      <div className="wrapper quotes">
        {quotes.map(quote => (
            <QuoteCard key={quote.id} quote={quote}/>
        ))}
      </div>
    </section>
  )
}

export default Quotes
