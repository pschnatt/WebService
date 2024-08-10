import "./Restaurant.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Restaurant = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

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
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
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
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="restaurantTitle">Rinda Garden</h1>
          <div className="restaurantAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Thailand</span>
          </div>
          <span className="restaurantDistance">
            3.2km from your current location
          </span>
          <span className="restaurantPriceHighlight">
            Free wifi and Water
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
              Nestled in the heart of the city, Rinda Garden offers a serene dining experience just a short stroll from the bustling Main Market Square. 
              This restaurant boasts a charming blend of modern and traditional decor, with wooden floors and warm lighting that create a cozy atmosphere. Guests can enjoy a variety of gourmet dishes, 
              each prepared with the freshest local ingredients. The menu includes everything from classic Thai cuisine to international favorites, all accompanied by a carefully curated selection of wines. Whether you're here for a romantic dinner or a casual lunch, Rinda Garden promises an unforgettable culinary journey. The restaurant 
              also offers complimentary WiFi and a comfortable seating area, making it an ideal spot for both dining and relaxation.
              </p>
            </div>
            <div className="restaurantDetailsPrice">
              <h1>Greate Place for taking a photo and Family Time</h1>
              <span>
                This property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$8</b> (Food Start Price)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
      </div>
    </div>
  );
};

export default Restaurant;
