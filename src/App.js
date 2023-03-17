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
import Dashboard from './user-routes/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Profile from './user-routes/Profile';

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
   
   {/* Routes which can be only accessed when the user is logged in! */}
   <Route path='user' element={<PrivateRoute/>}>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='profile' element={<Profile/>}/>
   </Route>



</Routes>
</BrowserRouter>
  );
}




export default App;
