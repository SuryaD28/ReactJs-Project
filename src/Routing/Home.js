import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart , removeFromCart} from '../Redux/Action';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';


export const Product = [{
  id:1,
  Name: "Samsung Galaxy S24 ",
  Price:"Rs.109,500",
  Image : "mobile1.jpeg",
},
{
  id:2,
  Name: "OnePlus Nord CE4",
  Price:"Rs.24,999",
  Image : "mobile2.jpeg",
},
{
  id:3,
  Name: "OPPO Reno11 5G",
  Price:"Rs.38999.00",
  Image : "mobile3.jpeg",
},
{
  id:4,
  Name: "iPhone 15 Pro",
  Price:"Rs.119,990",
  Image : "mobile4.jpeg",
},
{
  id:5,
  Name: "iPhone 14",
  Price:"Rs.64,900.00",
  Image : "mobile5.jpeg",
},
{
  id:6,
  Name: "realme C53",
  Price:"Rs.10,000.00",
  Image : "mobile6.jpeg",
},
]

const Home = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  console.log("data" , data)
  const addToCartHandler = (item) => {
    console.log("item" ,item)
    dispatch(addToCart(item))
  }

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item))
  }

  return (
    <div>
        {/* <h1> This is Home Component...!</h1>
        <h2>Hello everyone...</h2>
        <p>This is the Home page. Here you can find the latest updates and news about our application.</p> */}

        <h1>Product List</h1>

         <div className=' card ' style={{display:'flex' , flexWrap:'wrap' , justifyContent:'space-around'}} > 
         
          {Product.map((item) => (
             <div className='container'>
               <Grid item xs={12} sm={6} md={4}>
              <Card  style={{ width: '18rem' }}>
              <CardContent>
              <img src={item.Image} alt='Avatar' style={{width:100, display:'block' , marginLeft:15}} />
              <Typography variant="h5" component="h2">
                {item.Name}
              </Typography>
             <Typography color="textSecondary">
                {item.Price}
              </Typography>
             </CardContent>
             <CardActions>
             <Button size="small" onClick={() => {addToCartHandler(item)}}>ADD_TO_CART</Button>
             <Button size="small" style={{color:'red'}} onClick={() => {removeFromCartHandler(item)}}>REMOVE_FROM_CART</Button>
             </CardActions>
             </Card>
             </Grid>
            </div>
          ))}  
         
        </div>
        
    </div>
  )
}

export default Home