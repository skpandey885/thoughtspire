import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Signup from './pages/Signup';
import About from './pages/About';
import CreatePost from './pages/CreatePost';


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path = "/" element={<Home/>}/>
  <Route path = "trending" element={<Trending/>}/>
  <Route path = "create-post" element={<CreatePost/>}/>
</Routes>
</BrowserRouter>
  );
}




export default App;
