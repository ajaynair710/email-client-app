# Email Client App

## Overview

This project is an email client application inspired by Outlook. The app provides a user-friendly interface for managing emails, allowing users to view, mark, and filter their emails efficiently.

## APIs Provided

- **Get All Emails**: [Email List API](https://flipkart-email-mock.now.sh/)
- **Paginated Emails**: [Paginated Email API](https://flipkart-email-mock.now.sh/?page=<pageNumber>) (e.g., [Page 1](https://flipkart-email-mock.now.sh/?page=1), [Page 2](https://flipkart-email-mock.now.sh/?page=2))
- **Get Email Body**: [Email Body API](https://flipkart-email-mock.now.sh/?id=<email-item-id>) (e.g., [Email ID 3](https://flipkart-email-mock.now.sh/?id=3))

## Sample UI

- **Email List View**: [View Here](http://bit.ly/2VtQGcb)
- **Email Body View**: [View Here](http://bit.ly/2I5DemI)
- **Color Codes**: [View Here](http://bit.ly/2wa2pCa)

## Product Features

- **Email List Page**: Displays the list of emails sent to the user.
- **Master-Slave Split Screen**: Clicking on an email item splits the view into a master (email list) on the left and a slave (email body) on the right.
- **Dynamic Loading of Email Body**: The body of the email is loaded only when an email item is clicked.
- **Mark as Favorite**: Users can mark an email as a favorite by clicking the "Mark as Favorite" button in the email body section.
- **Read/Unread Distinction**: Emails are displayed in different CSS styles based on their read/unread status.
- **Filtering**: Users can filter emails by favorites, read, and unread status.

## Features

1. Render the email list using the provided API.
2. Each email should display:
   - From
   - Subject
   - Short description
   - Date and time
3. Display an avatar (circular logo) in each email item, populated with the first character of the sender's first name.
4. Upon clicking an email, render its body using the API, which includes:
   - Email subject
   - Email body
   - Email date and time
5. Format the date as `dd/MM/yyyy hh:mm a`.
6. Allow users to mark emails as favorites in the body section.
7. Filter emails marked as favorite, read, and unread.
8. Ensure the UI closely resembles the provided mocks.

## Also it has
- **Pagination**: Support for a lengthy email list with pagination (Page 1 and Page 2).
- **Persistent Storage**: Save the state of favorited and read emails across sessions using local storage or similar technologies.
