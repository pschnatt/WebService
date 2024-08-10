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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
