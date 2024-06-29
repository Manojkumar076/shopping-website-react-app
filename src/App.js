import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import categories from './categories.json';
import ExpandableList from './components/ExpandableList';
import TypeaheadSearch from './components/TypeaheadSearch';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Shopping Website
          </Typography>
          <TypeaheadSearch categories={categories} />
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Paper>
              <ExpandableList categories={categories} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9}>
            {/* Add banner and other contents here */}
            <img src="https://img.freepik.com/premium-vector/best-sale-banner-design-with-editable-text-effect_535749-494.jpg" alt="Banner" style={{ width: '100%' }} />
            <Typography variant="h5" gutterBottom>
              Best of Electronics
            </Typography>
            <Grid container spacing={3}>
              {/* Example product items */}
              <Grid item xs={12} sm={4}>
                <Paper>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-Jg9c_aFduwJ9v8N5qGqwOP0Xg4Lto5wmA&s" alt="Laptop" style={{ width: '100%' }} />
                  <Typography variant="body1">Asus Vivo Book</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOB8qzCdLF_45V1j3_rrIR0Z5YSyQS5Vq7Q&s" alt="Phones" style={{ width: '100%' }} />
                  <Typography variant="body1">Samsung Launches Galaxy A53 5G</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41ufbOqqoDuftqCZacsKz8618BMr8pEbByw&s" alt="Fashion" style={{ width: '100%' }} />
                  <Typography variant="body1">Dress</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQfj95XmDY8xvXV3nEG27ZtBvr4CQGbEREw&s" alt="Books" style={{ width: '100%' }} />
                  <Typography variant="body1">RICH DAD AND POOR DAD</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUIYOMxxT1hJIosp1PA1pDmcV9qvDua-oCA&s" alt="Slippers" style={{ width: '100%' }} />
                  <Typography variant="body1">mou Slides Mens Slippers</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper>
                  <img src="https://m.media-amazon.com/images/I/716gAr0KA6L.jpg" alt="EarBuds" style={{ width: '100%' }} />
                  <Typography variant="body1">Noise Earbuds</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;

