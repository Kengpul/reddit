import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './components/Navbar/NavigationBar';
import Home from './pages/Home/Home';
import Submit from './pages/Submit/Submit';
import ShowPost from './pages/Post/ShowPost';
import Error from './pages/Error/Error';
import Signup from './pages/User/Signup';
import Login from './pages/User/Login';

function App() {
  const { user, authReady } = useAuthContext();

  return (
    <div className="App">
      {authReady &&
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/submit' element={user ? <Submit /> : <Navigate to='/login' />} />
            <Route path='/post/:id' element={user ? <ShowPost /> : <Navigate to='/login' />} />
            <Route path='/post/:id/edit' element={user ? <Submit /> : <Navigate to='/login' />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
