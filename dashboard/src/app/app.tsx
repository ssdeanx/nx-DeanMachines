import { Button, Card, Form, Input } from '@nx-dean-machines/ui';
import { ReactElement } from 'react';
import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

export function App(): ReactElement {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Card title="Login Form" subtitle="Enter your credentials">
        <Form>
          <Input label="Username" placeholder="Enter your username" />
          <Input label="Password" type="password" placeholder="Enter your password" />
          <Button>Login</Button>
        </Form>
      </Card>
      <NxWelcome title="@nx-dean-machines/dashboard" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route. <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
