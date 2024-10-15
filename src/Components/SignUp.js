import React from 'react';
import { Avatar, Button, FormControl, Grid, Paper, Link ,  TextField, Typography } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { useForm } from 'react-hook-form';

const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
        
      };

    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'green' }
    const marginTop = { marginTop: 5 }
    return (
        
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField fullWidth variant="standard" label='FirstName' placeholder='Enter name' type='text' name='firstname'
                    {...register("firstname" , {
                        required: "FirstName is required",
                        maxLength:{
                          value:10,
                          message:"Max Length Exceed"
                        }
                      })}  />
                      {errors.firstname && <p style={{color:"red"}}>{errors.firstname.message}</p>}
                       {/* {errors.firstname && errors.firstname.type === "required" &&<p style={{color:"red"}}>FirstName is required</p>}
                       {errors.firstname && errors.firstname.type === "maxLength" &&<p style={{color:"red"}}>Max Length Exceed</p>} */}

                    <TextField fullWidth variant="standard" label='LastName' placeholder='Enter lastname' type='text' name='lastname'
                    {...register("lastname" , {
                        required: true
                      })} />
                       {errors.lastname && errors.lastname.type === "required" &&<p style={{color:"red"}}>LastName is required</p>}

                    <TextField fullWidth variant="standard" label='Email' placeholder='Enter Email' type='text' name='email'
                    {...register("email" , {
                        required: "Email is required",
                        pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: "Email is not valid."
                          }
                      })} />
                      {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
                       {/* {errors.email && errors.email.type === "required" &&<p style={{color:"red"}}>Email is required</p>}
                       {errors.email && errors.email.type === "pattern" && (<p >Email is not valid.</p>)} */}

                    {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                    <FormControl style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            // name="row-radio-buttons-group"
                            name="gender"
                        >
                            <FormControlLabel value="female"  control={<Radio />} label="Female" 
                            {...register("gender", {
                                required: true
                              })}
                            />
                            <FormControlLabel value="male"  control={<Radio />} label="Male" 
                             {...register("gender", {
                                required: true
                              })}
                              />
                             {errors.gender && errors.gender.type === "required" &&(<p style={{color:"red"}}>Select your gender</p>)}

                        </RadioGroup>
                    </FormControl>

                    {/* <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age" variant="standard"
                            name='age' {...register("age" , {
                                required: true
                              })}
                        >
                            <MenuItem value={21}>Twenty One</MenuItem>
                            <MenuItem value={22}>Twenty Two</MenuItem>
                            <MenuItem value={23}>Twenty Three</MenuItem>
                        </Select>
                        {errors.age && (
                     <p style={{color:"red"}}>Age is required</p>)}
                    </FormControl> */}

                    <TextField fullWidth variant="standard" label='Phone Number' placeholder='Enter PhoneNo.' type='number' name='phonenumber'
                    {...register("phonenumber" , {
                        required: "Phone No. is required",
                        maxLength:{
                          value:10,
                          message:"Max Length exceed"
                        },
                      })} />
                      {errors.phonenumber && <p style={{color:"red"}}>{errors.phonenumber.message}</p>}
                      {/* {errors.phonenumber && errors.phonenumber.type === "required" &&(<p style={{color:"red"}}>Phone No. is required</p>)}
                      {errors.phonenumber && errors.phonenumber.type === "maxLength" &&(<p style={{color:"red"}}>Max Length exceed</p>)} */}

                    <TextField fullWidth variant="standard" label='Password' placeholder='Enter Password' type='password'name='password'
                    {...register("password" , {
                        required: "Password is required",
                        minLength:{
                          value:5,
                          message:" Password should be at-least 5 characters."
                        }
                      })} />
                      {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
                       {/* {errors.password && errors.password.type === "required" &&<p style={{color:"red"}}>Password is required</p>}
                       {errors.password && errors.password.type === "minLength" && (<p style={{color:"red"}}>
                        Password should be at-least 5 characters. </p> )} */}


                    <TextField fullWidth variant="standard" label='Confirm Password' placeholder='Enter Confirm Pass' type='password' name='Confirmpassword'
                    {...register("Confirmpassword" , {
                        required: true
                      })} />
                       {errors.Confirmpassword && errors.Confirmpassword.type === "required" &&(<p style={{color:"red"}}>Confirm Password is required</p>)}

                    <FormControlLabel control={<Checkbox name='checkbox' />} label="I accept terms and conditions" 
                    {...register("checkbox", {
                    required: true
                  })}/>
                  {errors.checkbox && errors.checkbox.type === "required" &&(<p style={{color:"red"}}>Click on Checkbox</p>)}

                    <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                </form>
                <Typography> Already Registered 
                <Link href="/">Sign in</Link>
            </Typography>
            </Paper>
        </Grid>
      
    )
}

export default SignUp;