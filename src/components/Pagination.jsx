import React, { useContext, useState } from "react";
import EmailContext from "../context/emailContext";

const Pagination = () => {
  const { setEmails } = useContext(EmailContext);
  const [activePage, setActivePage] = useState(1); // Track the active page
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error state

  const fetchPage = (page) => {
    setLoading(true); // Start loading
    fetch(`https://flipkart-email-mock.now.sh/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setEmails(data.list);
        setActivePage(page); // Set the active page
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        setError("Failed to load emails. Please try again."); // Set error
      })
      .finally(() => {
        setLoading(false); // End loading
      });
  };

  return (
    <div className="pagination">
      <button
        className={`styled-button ${activePage === 1 ? "active" : ""}`}
        onClick={() => fetchPage(1)}
        disabled={activePage === 1 || loading} // Disable if active or loading
        aria-label="Go to page 1"
      >
        Page 1
      </button>
      <button
        className={`styled-button ${activePage === 2 ? "active" : ""}`}
        onClick={() => fetchPage(2)}
        disabled={activePage === 2 || loading} // Disable if active or loading
        aria-label="Go to page 2"
      >
        Page 2
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Pagination;
