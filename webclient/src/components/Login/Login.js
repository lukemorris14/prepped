import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from '@material-ui/core/';
import { Link } from 'react-router-dom';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { login } from '../../Api';

import './Login.scss';

export const Login = () => {
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
            login({
              username: 'LukeMorris',
              password: 'testing',
            });
            evt.preventDefault();
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className="Login__RightContainer" />
    </div>
  );
};
