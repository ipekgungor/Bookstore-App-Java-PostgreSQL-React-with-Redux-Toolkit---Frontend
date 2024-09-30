import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Button } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const open = Boolean(anchorEl);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Book Store</Navbar.Brand>
        <Badge
          badgeContent={totalQuantity}
          color="primary"
          onClick={handleCartClick}
        >
          <ShoppingCartIcon style={{ color: "white", cursor: "pointer" }} />
        </Badge>
      </Container>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} y>
        {cartItems.length === 0 ? (
          <MenuItem onClick={handleClose} className="custom-menu-item">
            Your cart is empty!
          </MenuItem>
        ) : (
          <>
            <h3 className="text-center">Cart Items</h3>
            {cartItems.map((item) => (
              <MenuItem
                key={item.id}
                onClick={handleClose}
                className="custom-menu-item"
              >
                <img
                  src={item.imageUrl}
                  alt="book"
                  style={{
                    width: "6rem",
                    height: "8rem",
                  }}
                />
                <div style={{ flex: 1, marginLeft: "10px" }}>
                  <strong>{item.title}</strong>
                  <p style={{ margin: 0 }}>Quantity: {item.quantity}</p>
                </div>
                <DeleteIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFromCart(item.id);
                  }}
                  style={{
                    marginLeft: "10px",
                    cursor: "pointer",
                    color: "red",
                  }}
                />
              </MenuItem>
            ))}
            <MenuItem>
              <Button
                variant="dark"
                onClick={() => {
                  navigate("/cart");
                  handleClose();
                }}
                style={{ width: "100%" }}
              >
                View Cart
              </Button>
            </MenuItem>
          </>
        )}
      </Menu>
    </Navbar>
  );
};

export default Header;
