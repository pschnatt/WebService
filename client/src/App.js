import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Restaurant from "./pages/RestaurantDe/Restaurant";
import BookingPage from "./pages/bookingdetail/bookingde";
import List from "./pages/list/List";
import BookingHistory from "./pages/bookinghistory/bookinghistory";
import Login from "./pages/Login/LoginForm";
import Register from "./pages/Register/SignUpForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
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
