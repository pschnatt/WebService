import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Restaurant from "./pages/RestaurantDe/Restaurant";
import BookingPage from "./pages/bookingdetail/bookingde";
import List from "./pages/list/List";
import BookingHistory from "./pages/bookinghistory/bookinghistory";
import Login from "./pages/Login/LoginForm";
import Register from "./pages/Register/SignUpForm";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredential = true

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/restaurants" element={<List/>}/>
        <Route path="/restaurant/:id" element={<Restaurant/>}/>
        <Route path="/bookingdetail" element={<BookingPage/>}/>
        <Route path="/bookinghistory" element={<BookingHistory/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
