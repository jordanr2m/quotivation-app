import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quotes from "./components/quotes/Quotes";
import { Loader } from "react-feather";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]); // API data
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const quotesUrl = "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";
  const categories = ["All", "Leadership", "Empathy", "Motivation", "Learning", "Empowerment"];
  const maxFaves = 3; // max number of favorite quotes users can add

  const fetchQuotes = async () => {
    try {
      setIsLoading(true);
      const request = await fetch(quotesUrl);
      const results = await request.json();
      setQuotes(results);
    } catch (err) {
      console.log("Something went wrong", err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  // Filter quotes
  const filteredQuotes = category === "All" ? quotes : quotes.filter(quote => quote.categories.includes(category));

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const addToFavorites = (quoteId) => {
    // console.log(`In favorite quotes with ${quoteId}`)
    const selectedQuote = quotes.find(quote => quote.id === quoteId);
    const alreadyFavorite = favoriteQuotes.find(quote => quote.id === selectedQuote.id);
    // console.log(alreadyFavorite);

    // Check if it is already a favorite quote
    if (favoriteQuotes.includes(alreadyFavorite)) {
      console.log("Already in favorites! Choose another.");
      // Check if there are less than 3 quotes in favorites
    } else if (favoriteQuotes.length < maxFaves) {
      console.log("Added to favorites!");
      setFavoriteQuotes([selectedQuote, ...favoriteQuotes]);
    } else {
      console.log("Max number of favorites reached. Remove one to add another");
    }
  };

  return (
    <div className='App'>
      <Header />
      <main>
        <section className="favorite-quotes">
          <div className="wrapper quotes">
            <h3>Top 3 favorite quotes</h3>
            {favoriteQuotes.length > 0 && JSON.stringify(favoriteQuotes)}
            <div className="favorite-quotes-description">
              <p>You can add up to three favorites by selecting from the options below.<br />
              Once you choose, they will appear here.
              </p>
            </div>
          </div>
        </section>
        {isLoading ? (
          <Loader />
        ) : (
          <Quotes
            quotes={filteredQuotes}
            category={category}
            categories={categories}
            handleCategoryChange={handleCategoryChange}
            addToFavorites={addToFavorites}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;
