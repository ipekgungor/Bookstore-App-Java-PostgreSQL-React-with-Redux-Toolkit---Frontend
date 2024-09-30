import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

const CartDetail = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <>
        <h1 className="text-center">Your Cart is Empty!</h1>;
        <div className="text-center mt-4">
          <Button variant="dark" onClick={handleGoToHome}>
            Go to Home
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Cart Details</h1>
      <Row>
        {cartItems.map((item) => (
          <Col key={item.id} md={4} className="my-3">
            <Card className="p-3" style={{ border: "none" }}>
              <Link
                to={`/books/${item.id}`}
                style={{ display: "block", alignSelf: "center" }}
              >
                <Card.Img
                  variant="top"
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ height: "24rem", width: "15rem", margin: "auto" }}
                  className="mt-3"
                />
              </Link>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Card.Text>
                  <strong>Quantity: {item.quantity}</strong>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove book
                  </Button>
                  <div className="d-flex">
                    <Button
                      variant="secondary"
                      onClick={() => handleDecreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                      className="me-2"
                    >
                      -
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="dark" onClick={handleGoToHome}>
          Go to Home
        </Button>
        <Button variant="dark" className="mx-3">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default CartDetail;
