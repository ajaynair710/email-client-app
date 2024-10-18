import React, { useContext, useEffect, useState } from "react";
import EmailContext from "../context/emailContext";

const EmailItem = ({ email, isSelected }) => {
  const {
    setSelectedEmail,
    toggleEmailSelection,
    markEmailAsRead,
    readEmailIds,
  } = useContext(EmailContext);

  const [isFavoriteEmail, setIsFavoriteEmail] = useState(false);

  useEffect(() => {
    // Check localStorage for favorite emails
    const favoriteEmails = JSON.parse(localStorage.getItem("favoriteEmails")) || [];
    setIsFavoriteEmail(favoriteEmails.includes(email.id));
  }, [email.id]);

  // Function to handle email click
  const handleEmailClick = () => {
    setSelectedEmail(email); // Set selected email
    toggleEmailSelection(email.id); // Mark email as selected

    // Mark as read and update local storage if not already marked
    if (!readEmailIds.includes(email.id)) {
      markEmailAsRead(email.id);
    }
  };

  return (
    <div
      className={`email-item ${isSelected ? "selected" : ""} ${readEmailIds.includes(email.id) ? "read" : "unread"}`}
      onClick={handleEmailClick}
    >
      <div className="avatar">
        {/* Ensure email.from exists and name is available */}
        {email.from && email.from.name ? email.from.name[0] : "?"}
      </div>
      <div className="email-info">
        <div className="from">
          <p>From:</p>
          <h5>
            {email.from && email.from.name ? email.from.name : "Unknown Sender"}{" "}
            <span className="email-address">
              {email.from && email.from.email ? `<${email.from.email}>` : ""}
            </span>
          </h5>
        </div>
        <div className="subject">
          <p>Subject:</p>
          <h5>{email.subject}</h5>
        </div>
        <p>{email.short_description}</p>
        <span>{new Date(email.date).toLocaleString()}</span>
        {isFavoriteEmail && <span className="favorite-label">Favorite</span>}
      </div>
    </div>
  );
};

export default EmailItem;
