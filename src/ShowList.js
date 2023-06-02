import React, { useState, useEffect } from "react";
import "./styles.css";
const ShowList = ({ handleShowSummary }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="show-list">
      <h1 className="header">Show List</h1>
      {shows.map((show) => (
        <div className="show-card" key={show.show.id}>
          <h2 className="show-name">{show.show.name}</h2>
          <img
            src={show.show.image.original}
            alt={show.show.id}
            height={500}
            width={400}
          />
          <button
            className="button"
            onClick={() => handleShowSummary(show.show.id)}
          >
            View Summary
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
