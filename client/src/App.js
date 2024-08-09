import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Restaurant from "./pages/RestaurantDe/Restaurant";
import BookingPage from "./pages/bookingdetail/bookingde";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurants" element={<List/>}/>
        <Route path="/restaurant/:id" element={<Restaurant/>}/>
        <Route path="/bookingdetail" element={<BookingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
