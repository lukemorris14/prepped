import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { AuthContext } from './Auth';
import { PrivateRoute } from './Routes/PrivateRoute';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';

const App = (props) => (
  <AuthContext.Provider value={false}>
    <Router>
      <div>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/admin" component={() => <h1>Admin</h1>} />
      </div>
    </Router>
  </AuthContext.Provider>
);

export default App;
