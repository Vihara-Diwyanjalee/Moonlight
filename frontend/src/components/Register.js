
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const userData = { email, password, username };
      const response = await axios.post('http://localhost:5002/api/register', userData);
      console.log('Registration successful:', response.data);
      
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error.response.data.message); 
    }
  };

  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper elevation={3} sx={{  borderRadius: 10,  width:'200%', }}>
            <Grid container spacing={0}  >
              {/* Left Side (Logo) */}
              
  <Grid item xs={4} sx={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20, background:'#B2BFFF', padding:5 }}>
  <Grid container direction="column" justifyContent="space-between" alignItems="center" style={{ height: '100%' }}>
    <Box>
      <Typography component="h1" variant="h7" align="center" sx={{marginTop:10, color:'white'}}>
        Welcome
      </Typography>
    </Box>
    <Box>
    <img src={logo} alt="Company Logo" style={{ height: '120px', display: 'block', margin: 'auto' }} />
    </Box>
    <Box>
      <Typography component="h1" variant="h5" align="center" sx={{marginBottom:10}}>
        Let’s Get you setup
      </Typography>
    </Box>
  </Grid>
</Grid>



              {/* Right Side (Input Fields) */}
              <Grid item xs={8} sx={{  borderTopRightRadius: 20, borderBottomRightRadius: 20, padding:4}}>
                <Typography component="h1" variant="h7">
                  Sign up
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  style={{
    width: '100%',
    padding: '12px 16px',
    fontSize: '1.2rem',
    borderRadius: '10px',
    border: `1px solid #B2BFFF`,
    outline: 'none',
    boxSizing: 'border-box',
  }}
/>

                    </Grid>
                    <Grid item xs={12}>
                    <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{
    width: '100%',
    padding: '12px 16px',
    fontSize: '1.2rem',
    borderRadius: '10px',
    border: `1px solid #B2BFFF`,
    outline: 'none',
    boxSizing: 'border-box',
  }}
/>

                    </Grid>
                    <Grid item xs={12}>
                    <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{
    width: '100%',
    padding: '12px 16px',
    fontSize: '1.2rem',
    borderRadius: '10px',
    border: `1px solid #B2BFFF`,
    outline: 'none',
    boxSizing: 'border-box',
  }}
/>

                    </Grid>
                    
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Accept terms and conditons"
                      />
                    </Grid>
                  </Grid>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button onClick={handleRegister}
    type="submit"
    variant="contained"
    sx={{
      mt: 3,
      mb: 2,
      color:"black",
      fontStyle:'bold',
      borderRadius: '40px', 
      width: '30%', 
      backgroundColor: '#B2BFFF', 
      '&:hover': {
        backgroundColor: '#0d47a1', 
      },
    }}
  >
    Register
  </Button>
      {error && <p>{error}</p>} 
</Box>

                  <Grid container justifyContent="center">
                    <Grid item>
                      <Link href="#" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
 

  
  );
};

export default Register;
