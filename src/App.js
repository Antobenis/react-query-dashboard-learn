import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from 'spinner';
import { PrivateRoutes } from 'privateroutes'

const LoginComponent = lazy(() => import('login'));
const Home = lazy(() => import('views/home'));
const UserGet = lazy(() => import('views/userget'));

function App() {
  return (
    <Suspense fallback={<div className='login-parent'><Spinner /></div>}>
      <Routes>
// authorization login
        <Route exact path="/" element={<LoginComponent />} />
        <Route path="/login" element={<LoginComponent />} />

// Tocken setLogin
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/userget" element={<UserGet />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;
