import { Routes, Route, BrowserRouter } from 'react-router-dom'

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
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/submit' element={<Submit />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/post/:id' element={<ShowPost />} />
          <Route path='/post/:id/edit' element={<Submit />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
