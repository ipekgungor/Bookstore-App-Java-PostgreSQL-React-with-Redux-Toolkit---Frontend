# Bookstore-App-Java-PostgreSQL-React-with-Redux-Toolkit - Frontend

This is a book sales application where books are listed, and users can add or remove any books they want from their cart. With the Redux Toolkit, the cart can be viewed simultaneously on the entire page, and changes can be tracked.

## Features

- **Home Page:** Users can view pictures, titles, and prices of books. If they wish, they can go to the book detail page or add the book to their cart.
- **Book Detail Page:** Photos, titles, descriptions, release years, and prices of the books are listed. Users can add the book to the cart or return to the home page.
- **Cart Page:** The books in the cart are displayed. The quantity can be increased or decreased, or the book can be completely removed from the cart.
- **Cart Icon in Header:** Thanks to the cart icon in the header, users can view the current status of their carts on every page, remove items, and navigate to the cart detail page.

## Requirements

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/)  (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation Instructions

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ipekgungor/Bookstore-App-Java-PostgreSQL-React-with-Redux-Toolkit---Frontend.git
2. Navigate to the Project Directory:
   ```bash
   cd Bookstore-App-Java-PostgreSQL-React-with-Redux-Toolkit---Frontend
3. Install Dependencies:
   ```bash
   npm install react-router-dom
   npm install bootstrap@latest
   npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
   npm install redux react-redux
   npm install @reduxjs/toolkit react-redux
4. Run the Application:
   ```bash
   npm start
      
## Contact
- **Developer:** İpek Güngör
- **Email:** ipekgungor2001@gmail.com
- **GitHub Profile:** ipekgungor

## Notes
- **You may need to check these pages.** https://mui.com/material-ui/getting-started/ and https://react-bootstrap.netlify.app/
- **I solved the CORS problem using ngrok. You can find the configuration in the axiosConfig.js file. Ngrok allows you to create an account and start using it by entering the command ngrok http 8080.** 
