import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
<BrowserRouter>
<ToastContainer/>
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
