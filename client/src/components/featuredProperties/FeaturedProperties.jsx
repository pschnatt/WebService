import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://www.restolacuisine.com/restaurants/restaurant-la-cuisine/website/images/Lacuisine_resto.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Restaurant La Cuisine</span>
        <span className="fpCity">Chicoutimi, QC</span>
        <span className="fpPrice">Starting from $24</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://img.bester-global.com/report_images/large/782962.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Rinda Garden</span>
        <span className="fpCity">Thailand</span>
        <span className="fpPrice">Starting from $4</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://panoramicrestaurant.com/wp-content/uploads/2023/07/2TH08795-scaled.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Panoramic Restaurant</span>
        <span className="fpCity">Istanbul</span>
        <span className="fpPrice">Starting from $32</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.peninsula.com/-/media/images/bangkok/new/dining/thiptara/pbk-thiptara-2-1074.jpg?mw=987&hash=2D340A9830DE9DB08556D2AF975BE283"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Thiptara</span>
        <span className="fpCity">Thailand, Bangkok</span>
        <span className="fpPrice">Starting from $9</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
