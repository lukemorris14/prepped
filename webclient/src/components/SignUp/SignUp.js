import React, { useState } from 'react';
import { Avatar, Button, TextField, Typography } from '@material-ui/core/';
import { useHistory } from 'react-router-dom';

import PersonAdd from '@material-ui/icons/PersonAdd';
import { create } from '../../Api';

import './SignUp.scss';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  return (
    <div className="SignUp">
      <div className="SignUp__LeftContainer" />
      <div className="SignUp__Container">
        <Avatar className="SignUp__Avatar">
          <PersonAdd />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form
          className="SignUp__Form"
          noValidate
          onSubmit={(evt) => {
            create('/signup', {
              username,
              password,
            }).then(() => {
              history.push('/login');
            });
            evt.preventDefault();
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="confirmPassword"
            value={confirmPassword}
            error={
              password !== confirmPassword &&
              confirmPassword !== '' &&
              password !== ''
            }
            onChange={({ target }) => setConfirmPassword(target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="SignUp__Submit"
          >
            Register
          </Button>
        </form>
      </div>
      <div className="SignUp__RightContainer" />
    </div>
  );
};
