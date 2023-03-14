import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path = "/" element={<Home/>}/>
  <Route path = "trending" element={<Trending/>}/>
  <Route path = "posts/create" element={<CreatePost/>}/>
  <Route path = "auth/login" element={<Login/>}/>
  <Route path="auth/signup" element={<Signup/>} />


</Routes>
</BrowserRouter>
  );
}




export default App;
