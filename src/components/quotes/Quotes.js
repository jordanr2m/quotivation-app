const Quotes = ({ quotes }) => {
  return (
    <section className="all-quotes">
      <div className="wrapper quotes">
        {JSON.stringify(quotes)}
      </div>
    </section>
  )
}

export default Quotes
