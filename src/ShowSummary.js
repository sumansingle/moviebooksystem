import BookingForm from "./BookingForm";
import React, { useState, useEffect } from "react";

const ShowSummary = ({ showId, showName }) => {
  const [summary, setSummary] = useState("");
  const [currentScreen, setCurrentScreen] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDetails, setMovieDetails] = useState("");

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
        const data = await response.json();
        setSummary(data.summary);
        setMovieName(data.name);
        setMovieDetails(data.language);
      } catch (error) {
        console.error("Error fetching summary:", error);
      }
    };

    fetchSummary();
  }, [showId]);

  const handleBookTicket = () => {
    setCurrentScreen("bookingForm");
  };

  return (
    <div className="show-summary">
      {currentScreen === "bookingForm" ? (
        <BookingForm movieName={movieName} movieDetails={movieDetails} />
      ) : (
        <>
          <h1 className="header">Show Summary</h1>
          <p>{summary}</p>
          <button className="button" onClick={handleBookTicket}>
            Book Movie Ticket
          </button>
        </>
      )}
    </div>
  );
};

export default ShowSummary;
