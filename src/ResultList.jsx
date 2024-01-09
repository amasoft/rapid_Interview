import React, { useState, useEffect } from "react";
import "./ResultList.css";
import Navigation from "./Navigation";

const ResultList = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    const filtered = articles.filter((article) =>
      article.email.includes(searchTerm)
    );
    setArticles(filtered);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Navigation />
      <div className="article-list">
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
        {/* {articles.length>0?():""} */}
        {articles.length > 0 ? (
          <>
            <h2>Article List</h2>
            <ul>
              {articles.map((article) => (
                <li key={article.id}>
                  <h3>name: {article.name}</h3>
                  <p>message: {article.body}</p>
                  <p>Email: {article.email}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>No data found for the specified email.</p>
        )}
      </div>
    </>
  );
};
export default ResultList;
