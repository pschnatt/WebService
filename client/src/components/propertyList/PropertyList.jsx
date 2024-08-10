import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://s.hdnux.com/photos/01/30/12/04/23109943/1/788x0.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Fine Dining</h1>
          <h2>134 places near you</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/easy-vegetarian-recipes-chickpea-salad-smashed-cucumbers-1656600167.jpeg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Vegetarian Food</h1>
          <h2>11 places near you</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.foodrepublic.com/img/gallery/100-italian-fooddrink-words-and-phrases/intro-1684783348.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Italian Food</h1>
          <h2>25 places near you</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://blog.hungryhub.com/wp-content/uploads/2022/06/%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B4%E0%B9%88%E0%B8%87-%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B5%E0%B8%99-%E0%B8%AE%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%B4%E0%B8%99-Hongmin-Hungry-Hub-1024x682.webp"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Chinese restaurant</h1>
          <h2>12 places near you</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.tastingtable.com/img/gallery/23-whole-foods-baked-goods-ranked/l-intro-1691427400.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Bakery/Dessert</h1>
          <h2>545 places near you</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
