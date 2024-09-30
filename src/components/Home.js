import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import axios from "../api/axiosConfig";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();

  //get books from backend ( http://localhost:8080/api/books )
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/api/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center">Book Store</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {books.map((book, id) => (
          <Card
            key={id}
            style={{ width: "22rem", border: "none" }}
            className="mx-2 mt-4 card_style card_style_home shadow-sm"
          >
            <Link to={`/books/${book.id}`}>
              <Card.Img
                variant="top"
                src={book.imageUrl}
                alt={book.title}
                style={{ height: "24rem", width: "15rem" }}
                className="mt-3 img-center"
              />
            </Link>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>Price: ${book.price}</Card.Text>
              <div className="button_div d-flex justify-content-center">
                <Button
                  variant="dark"
                  onClick={() => handleAddToCart(book)}
                  className="col-lg-12"
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
