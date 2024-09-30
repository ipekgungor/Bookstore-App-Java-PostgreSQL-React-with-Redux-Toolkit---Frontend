import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import axios from "../api/axiosConfig";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetail();
  }, [id]);

  const handleGoToHome = () => {
    navigate("/");
  };

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">{book.title}</h1>
      <div className="row d-flex justify-content-center">
        <Card
          style={{ width: "22rem", border: "none" }}
          className="mx-2 mt-4 card_style"
        >
          <Card.Img
            variant="top"
            src={book.imageUrl}
            alt={book.title}
            style={{ height: "24rem", width: "15rem", margin: "auto" }}
            className="mt-3"
          />
          <Card.Body>
            <h5>Author: {book.author}</h5>
            <Card.Text>
              <strong>Price:</strong> ${book.price}
            </Card.Text>
            <Card.Text>
              <strong>Description:</strong> {book.description}
            </Card.Text>
            <Card.Text>
              <strong>Release Year:</strong> {book.releaseYear}
            </Card.Text>
            <div className="button_div d-flex justify-content-center">
              <Button
                variant="dark"
                onClick={handleGoToHome /*onClick style with no parameter*/}
                className="mx-2"
              >
                Go to Home
              </Button>
              <Button
                variant="dark"
                onClick={
                  () => handleAddToCart(book) /*onClick style with parameters*/
                }
                className="mx-2"
              >
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BookDetail;
