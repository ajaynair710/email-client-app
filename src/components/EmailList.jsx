import React, { useContext } from "react";
import EmailContext from "../context/emailContext";
import EmailItem from "./EmailItem";

const EmailList = () => {
  const { emails, selectedEmail, loading, error } = useContext(EmailContext);

  if (loading) {
    return <div className="loading">Loading emails...</div>;
  }

  if (error) {
    return <div className="error-message">Failed to load emails. Please try again later.</div>;
  }

  return (
    <div className="email-list">
      {emails.length > 0 ? (
        emails.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            isSelected={selectedEmail?.id === email.id}
          />
        ))
      ) : (
        <p className="no-emails">No emails available</p>
      )}
    </div>
  );
};

export default EmailList;
