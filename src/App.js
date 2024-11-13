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
  const quotesUrl = "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";
  const categories = ["All", "Leadership", "Empathy", "Motivation", "Learning", "Empowerment"];

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

  return (
    <div className='App'>
      <Header />
      <main>
        {isLoading ? <Loader /> : <Quotes quotes={quotes} />}
      </main>
      <Footer />
    </div>
  );
}
export default App;
