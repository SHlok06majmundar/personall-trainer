// Blogs.jsx
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link, Grid, Paper } from '@mui/material';

const blogs = [
  {
    id: 1,
    title: 'Understanding AI in Fitness Applications',
    description: 'Dive into the role of AI in modern fitness apps and how they enhance user experience.',
    link: 'https://example.com/ai-in-fitness', // Replace with actual blog link
  },
  {
    id: 2,
    title: 'The Future of Gym Technology',
    description: 'Explore the emerging technologies that are shaping the future of gyms and fitness.',
    link: 'https://example.com/future-gym-technology', // Replace with actual blog link
  },
  {
    id: 3,
    title: 'Nutrition Tips for Fitness Enthusiasts',
    description: 'Learn about essential nutrition tips that every fitness enthusiast should know.',
    link: 'https://example.com/nutrition-tips', // Replace with actual blog link
  },
  // Add more blogs as needed
];

const Blogs = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Blogs
      </Typography>
      <Grid container spacing={2}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Paper elevation={3} sx={{ padding: '1.5rem' }}>
              <Typography variant="h6" component="h2">
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {blog.description}
              </Typography>
              <Link href={blog.link} target="_blank" rel="noopener noreferrer" color="primary">
                Read More
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
