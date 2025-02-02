// Tutorials.jsx
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link, Grid, Paper } from '@mui/material';

const tutorials = [
  {
    id: 1,
    title: 'Building a Gym Management System with Node.js and React',
    description: 'Learn how to build a complete gym management system using Node.js for the backend and React for the frontend.',
  },
  {
    id: 2,
    title: 'Creating a Fitness App with Machine Learning',
    description: 'Discover how to use machine learning techniques to create a personalized fitness application.',
  },
  {
    id: 3,
    title: 'AI-Powered Workout Recommendations',
    description: 'Explore the concepts behind AI-powered recommendations for tailored workout plans.',
  },
  // Add more tutorials as needed
];

const Tutorials = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Tutorials
      </Typography>
      <Grid container spacing={2}>
        {tutorials.map((tutorial) => (
          <Grid item xs={12} sm={6} md={4} key={tutorial.id}>
            <Paper elevation={3} sx={{ padding: '1.5rem' }}>
              <Typography variant="h6" component="h2">
                {tutorial.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {tutorial.description}
              </Typography>
              <Link href="#" onClick={() => alert(`Link for ${tutorial.title} clicked!`)} color="primary">
                Read More
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Tutorials;
