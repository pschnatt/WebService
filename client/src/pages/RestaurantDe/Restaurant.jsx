import "./Restaurant.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

const Restaurant = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleBookNowClick = () => {
    navigate('/bookingdetail');
  };

  useEffect(() => {
    const id = localStorage.getItem("restaurant_id")
    axios.post("/api/restaurants/getRestById", {restaurantId: id})
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => toast.error("Error fetching restaurant resources:", error));
  }, []);

  const photos = [
    {
      src: "https://ak-d.tripcdn.com/images/1mi3x2224x8ntvh5sE041_W_320_0_R5_Q30.jpg?proc=source/trip",
    },
    {
      src: "https://t1.blockdit.com/photos/2020/02/5e35001e8f50790ca172bd27_800x0xcover_KR2LvqnD.jpg",
    },
    {
      src: "https://img.bester-global.com/report_images/large/782962.jpg",
    },
    {
      src: "https://www.sarakhamguide.com/upload/images/2020/02/67cbf9a1c40419fbdd646bbbcc43121b.jpg",
    },
    {
      src: "https://t1.blockdit.com/photos/2020/02/5e350052813bf8041176e26c_800x0xcover_vuOOEmUB.jpg",
    },
    {
      src: "https://t1.blockdit.com/photos/2020/02/5e34e2dc13df2904b62c2485_800x0xcover_rNHHLw9O.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header showSearchItems={false} />
      <div className="restaurantContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="restaurantWrapper">
          <button className="bookNow" onClick={handleBookNowClick}>Reserve or Book Now!</button>
          <h1 className="restaurantTitle">{restaurant.name || "Restaurant Title"}</h1>
          <div className="restaurantAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{restaurant.address || "Location not available"}</span>
          </div>
          <span className="restaurantDistance">
            {restaurant.distance || "300M Distance From your Location"}
          </span>
          <span className="restaurantPriceHighlight">
            {restaurant.startingPrice || "Price Highlight not available"}
          </span>
          <div className="restaurantImages">
            {photos.map((photo, i) => (
              <div className="restaurantImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="restaurantImg"
                />
              </div>
            ))}
          </div>
          <div className="restaurantDetails">
            <div className="restaurantDetailsTexts">
              <h1 className="restaurantTitle">Dine in the heart of the City</h1>
              <p className="restaurantDesc">
                {restaurant.detail || "Description not available"}
              </p>
            </div>
            <div className="restaurantDetailsPrice">
              <h1>Great Place for taking a photo and Family Time</h1>
              <span>
                {restaurant.rating || "Location score not available"}
              </span>
              <h2>
                <b>${restaurant.startingPrice || "Price not available"}</b> (Food Start Price)
              </h2>
              <button onClick={handleBookNowClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
      </div>
    </div>
  );
};

export default Restaurant;
