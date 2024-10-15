import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, checkout } from '../Redux/Action';
import { Button, Grid, Card, CardContent, CardActions, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cartItem.cartData);
    console.log("cartData in cart" , cartData)

    // Helper function to parse and format prices
    const parsePrice = (priceString) => {
        const numericString = priceString.replace(/[^0-9.-]+/g, "");
        return parseFloat(numericString);
    };

    const formatPrice = (price) => {
        return `₹${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    };

    // Calculate total price
    const totalPrice = cartData.reduce((total, item) => {
        const price = parsePrice(item.Price) * item.quantity;
        return total + price;
    }, 0);

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleIncrementQuantity = (itemId) => {
        dispatch(incrementQuantity(itemId));
    };

    const handleDecrementQuantity = (itemId) => {
        dispatch(decrementQuantity(itemId));
    };

    const handleCheckout = () => {
        dispatch(checkout());
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom >
                Cart Details
            </Typography>
            {cartData.length === 0 ? (
               <>
                <Typography variant="h6">
                    Your cart is empty.
                </Typography>
                <Link to='/'>
                <Button style={{backgroundColor:"black"}}> Shop Now</Button>
                </Link>
               </>
                 
            ) : (
                <Grid container spacing={3}>
                    {cartData.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card>
                                <CardContent>
                                    <img src={item.Image} alt={item.Name} style={{ width: 100 }} />
                                    <Typography variant="h6">
                                        {item.Name}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {item.Price}
                                    </Typography>
                                    <Typography variant="body1">
                                        Quantity: {item.quantity}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={() => handleIncrementQuantity(item.id)}
                                    >
                                        +
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={() => handleDecrementQuantity(item.id)}
                                    >
                                        -
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        onClick={() => handleRemoveFromCart(item)}
                                    >
                                        Remove
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
            {/* <Typography variant="h5" style={{ marginTop: '20px' }}>
                Total: {formatPrice(totalPrice)}
            </Typography> */}
            {cartData.length > 0 && (
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={{ marginTop: '20px' }} 
                    onClick={handleCheckout}
                >
                    Checkout
                </Button>
            )}
        </div>
    );
};

export default Cart;