import React, { useState } from "react";
import ListView from "./components/ListView";
import GridView from "./components//GridView";
import "./App.css";

function App() {
  const [view, setView] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    {
      id: 1,
      title: "Harry Potter",
      genre: "Suspense",
      date: "1997",
      description: "A series of fantasy novels",
      status: "Available",
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      genre: "Fantasy",
      date: "1954",
      description: "An epic high-fantasy novel",
      status: "Checked Out",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      genre: "Fiction",
      date: "1925",
      description: "A tale of greed, decay and despair",
      status: "Available",
    },
    {
      id: 4,
      title: "The Alchemist",
      genre: "Adventure",
      date: "1988",
      description: "A philosophical story about following one's dream",
      status: "Available",
    },
    {
      id: 5,
      title: "Harry Alchemist",
      genre: "Action & Adventure",
      date: "1998",
      description: "A philosophical story about following one's dream",
      status: "Available",
    },
    {
      id: 6,
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      date: "1960",
      description: "A story about racial injustice and loss of innocence",
      status: "Available",
    },
    {
      id: 7,
      title: "1984",
      genre: "Dystopian",
      date: "1949",
      description: "A political and social commentary novel",
      status: "Available",
    },
    {
      id: 8,
      title: "Pride and Prejudice",
      genre: "Romance",
      date: "1813",
      description: "A classic romantic novel",
      status: "Available",
    },
  ];
  

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="h1">Book List</h1>
      <button
        className="button-toggle"
        onClick={() => setView(view === "list" ? "grid" : "list")}
      >
        {view === "list" ? "Grid View" : "List View"}
      </button>
  
      <input
        type="text"
        className="search-input"
        placeholder="Search Book..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {view === "list" ? (
        <ListView books={filteredBooks} />
      ) : (
        <GridView books={filteredBooks} />
      )}
    </div>
  );
}  

export default App;
