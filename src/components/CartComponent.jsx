// CartComponent.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  CardTitle,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";
import {
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  processCheckout,
} from "../actions/cartAction";
import Swal from "sweetalert2";

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions.responseData,
    cartItems: state.carts.items,
    username: sessionStorage.getItem('username'),
  };
};

const mapDispatchToProps = {
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  processCheckout,
};

const CartComponent = (props) => {
  const { cartItems, updateCartItem, removeFromCart, processCheckout, clearCart } = props;

  useEffect(() => {
    // This effect will run whenever the cartItems in Redux state changes
      console.log(props.transactions);
      console.log(props.username);
    if(!props.username){
      window.location = "/";
    }
    if(props.transactions){
      console.log(props.transactions);
      Swal.fire({
        title: 'Checkout Success!',
        text: "You'll be redirect to Invoice Page",
        icon: 'success',
        confirmButtonText: 'Okay!'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = `/transactions/invoice/${props.transactions}`;
          }
      })
    }
  }, [cartItems, props.transactions, props.username]);

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

const handleCheckout = () => {
  // Dispatch the processCheckout action with the current cart state
  if(props.cartItems.length != 0 && props.username){
    console.log(props.cartItems, props.username);
    processCheckout(props.cartItems, props.username);
  }else{
    Swal.fire({
      title: 'Checkout Failed!',
      text: "Your is Empty",
      icon: 'error',
      confirmButtonText: 'Okay!'
    })
  }
  
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
        </CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ width: "100px" }}>{item.name}</td>
                  <td style={{ maxWidth: "100px" }}>
                    <InputGroup>
                      <Input
                      style={{ maxWidth: "75px" }}
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value, 10);
                          if (newQuantity > 0) {
                            updateCartItem(item.id, newQuantity);
                          }
                        }}
                      />
                      <InputGroupText>Qty</InputGroupText>
                    </InputGroup>
                  </td>
                  <td>Rp. {item.price}</td>
                  <td>Rp. {item.price * item.quantity}</td>
                  <td>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <p>Total Quantity: {getTotalQuantity()}</p>
          <p>Total Amount: Rp. {getTotalPrice()}</p>
          <Button color="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
