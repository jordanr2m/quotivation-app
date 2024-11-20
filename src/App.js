import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quotes from "./components/quotes/Quotes";
import Message from "./components/Message";
import { Loader } from "react-feather";
import "./App.css";
import FavoriteQuotes from "./components/quotes/FavoriteQuotes";

function App() {
  const [quotes, setQuotes] = useState([]); // API data
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("All");
  // Check for favoriteQuotes in localStorage, or use an empty array if there are none
  const [favoriteQuotes, setFavoriteQuotes] = useState(JSON.parse(window.localStorage.getItem("favoriteQuotes")) || []);
  const [messageText, setMessageText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

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

  // Add favoriteQuotes to localStorage (DO this BEFORE updating starting state)
  useEffect(() => {
    // Don't need to include window here, but Anne does to be extra safe
    window.localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes));
  }, [favoriteQuotes]); // Runs each time favoriteQuotes updates

  // Filter quotes
  const filteredQuotes = category === "All" ? quotes : quotes.filter(quote => quote.categories.includes(category));

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const addToFavorites = (quoteId) => {
    // console.log(`In favorite quotes with ${quoteId}`)

    // Find quote we clicked on
    const selectedQuote = quotes.find(quote => quote.id === quoteId);

    // SKILLCRUSH WAY - I removed this and replaced the functionality that happens when the user presses the heart icon more than once (Removes favorite quote vs displaying a message)
    // Find if quote is already in favoriteQuotes
    // const alreadyFavorite = favoriteQuotes.find(quote => quote.id === selectedQuote.id);

    // SKILLCRUSH WAY REMOVED if statement before else if
    // Check if it is already a favorite quote
    // if (alreadyFavorite) {
    // console.log("Already in favorites! Choose another.");

    // Check if there are less than 3 quotes in favorites
    if (favoriteQuotes.length < maxFaves) {
      setFavoriteQuotes([selectedQuote, ...favoriteQuotes]);
      setMessageText("Quote added to favorites ♡")
      setShowMessage(true);
      // More than 3 quotes
    } else {
      setMessageText("Max number of favorites reached. Remove one quote to add another.");
      setShowMessage(true);
    }
  };

  // Delete favorite quote from list
  const removeFromFavorites = (quoteId) => {
    const newFavorites = favoriteQuotes.filter(quote => quote.id !== quoteId);
    setFavoriteQuotes(newFavorites);
    setMessageText("Quote removed from favorites.")
    setShowMessage(true);
  };

  // Close pop-up message
  const removeMessage = () => {
    setShowMessage(false);
  }

  return (
    <div className='App'>
      {showMessage && (
        <Message
          messageText={messageText}
          removeMessage={removeMessage}
        />
      )}
      <Header />
      <main>
        <FavoriteQuotes
          favoriteQuotes={favoriteQuotes}
          maxFaves={maxFaves}
          removeFromFavorites={removeFromFavorites}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <Quotes
            quotes={filteredQuotes}
            category={category}
            categories={categories}
            handleCategoryChange={handleCategoryChange}
            addToFavorites={addToFavorites}
            favoriteQuotes={favoriteQuotes}
            removeFromFavorites={removeFromFavorites}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;
