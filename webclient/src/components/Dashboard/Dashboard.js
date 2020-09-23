import React from 'react';
import { useAuth } from '../../Auth';
import { Button } from '@material-ui/core/';

import './Dashboard.scss';

export const Dashboard = () => {
  const { setAuthTokens } = useAuth();

  return (
    <div>
      <div>Dashboard</div>
      <Button onClick={() => setAuthTokens()}>Log out</Button>
    </div>
  );
};
