import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from '@material-ui/core/';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';

import { useAuth } from '../../Auth';
import { create } from '../../Api';


import './Login.scss';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setAuthTokens } = useAuth();
  const history = useHistory();

  return (
    <div className="Login">
      <div className="Login__LeftContainer" />
      <div className="Login__Container">
        <Avatar className="Login__Avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className="Login__Form"
          noValidate
          onSubmit={(evt) => {
            create('/login', {
              username,
              password,
            }).then(({ token }) => {
              setAuthTokens(token);
              history.push('/dashboard');
            });
            evt.preventDefault();
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Username"
            name="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="Login__Submit"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className="Login__RightContainer" />
    </div>
  );
};
