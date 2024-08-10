import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [date, setDate] = useState(location.state?.date ? new Date(location.state.date[0].startDate) : new Date());
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || { adult: 1, children: 0});

  return (
    <div>
      <Navbar />
      <Header showSearchItems={false} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Restaurant Name</label>
              <input placeholder={"destination"} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date,"MM/dd/yyyy")}`}</span>
              {openDate && (
                <DatePicker
                  selected={date}
                  onChange={(newDate) => setDate(newDate)}
                  dateFormat="MM/dd/yyyy"
                  className="headerDatePicker"
                  inline
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem imageUrl= "https://s.hdnux.com/photos/01/30/12/04/23109943/1/788x0.jpg" 
            title="FineDine"
            distance={"500m"}
            detail={"Famous for its handmade pasta."}
            startprice={"12"}
            Rating={"7.3"}/>
            <SearchItem imageUrl= "https://www.restolacuisine.com/restaurants/restaurant-la-cuisine/website/images/Lacuisine_resto.jpg" 
            title="Restaurant La Cuisine" 
            distance={"1000m"}
            detail={"Offers a variety of Italian wines and freshly baked bread."}
            startprice={7}/>
            <SearchItem imageUrl= "https://img.bester-global.com/report_images/large/782962.jpg" 
            title="Rinda Garden" 
            distance={"12km"}
            detail={"Offers a variety of stir-fries, curries, and noodle dishes."}
            startprice={5}
            Rating={"9.8"}/>
            <SearchItem imageUrl= "https://panoramicrestaurant.com/wp-content/uploads/2023/07/2TH08795-scaled.jpg" 
            title="Panoramic Restaurant"
            distance={"800m"} 
            detail={"Offers a selection of fine cheeses and wines."}
            startprice={12}/>
            <SearchItem imageUrl= "https://www.peninsula.com/-/media/images/bangkok/new/dining/thiptara/pbk-thiptara-2-1074.jpg?mw=987&hash=2D340A9830DE9DB08556D2AF975BE283" 
            title="Thiptara" 
            distance={"723m"}
            detail={"Specializes in authentic Japanese sushi and sashimi."}
            startprice={9}/>
            <SearchItem imageUrl= "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg" 
            title="The Modernize" 
            distance={"960m"}
            detail={"Specializes in classic French cuisine "}
            startprice={14}/>
            <SearchItem imageUrl= "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2023/10/beacon_restaurants-2.jpg" 
            title="The Italian OAK" 
            distance={"1.2km"}
            detail={"Famous for its handmade pasta and wood-fired pizzas."}
            startprice={21}/>
            <SearchItem imageUrl= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRv08xClTpeOgeKbJvTbQU3Bx--2n2Aj5Ow&s" 
            title="EasternBlue" 
            distance={"750m"}
            detail={"Features fresh and healthy Mediterranean dishes"}
            startprice={18}/>
            <SearchItem imageUrl= "https://media.cnn.com/api/v1/images/stellar/prod/190710135245-12-waterfront-restaurants.jpg?q=w_3498,h_2296,x_0,y_0,c_fill" 
            title="SeaShoreSide" 
            distance={"820m"}
            detail={"Features fresh and healthy Mediterranean dishes"}
            startprice={27}
            Rating={"8.4"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
