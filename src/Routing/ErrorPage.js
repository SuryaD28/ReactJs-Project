import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go to Home
      </Button>
    </div>
  );
};

export default ErrorPage;