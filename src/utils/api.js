// src/utils/api.js
export const fetchEmails = async (page = 1) => {
    const response = await fetch(`https://flipkart-email-mock.now.sh/?page=${page}`);
    return response.json();
  };
  
  export const fetchEmailBody = async (id) => {
    const response = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`);
    return response.json();
  };
  