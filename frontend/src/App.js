import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css';
import Post from './pages/post/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/post' element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
