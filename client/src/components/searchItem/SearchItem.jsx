import "./searchItem.css";

const SearchItem = ({ imageUrl, title, distance, detail, startprice, Rating = 8.1 }) => {
  return (
    <div className="searchItem">
      <img
        src={imageUrl}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <span className="siDistance">{distance} from your place</span>
        <span className="siTaxiOp">Free Wifi</span>
        <span className="siSubtitle">
          {detail}
        </span>
        <span className="siFeatures">
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{Rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Start From ${startprice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">More Detail</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
