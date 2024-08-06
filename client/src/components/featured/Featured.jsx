import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2018/09/03/04/56/thaifood-3650379_960_720.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Thai Food</h1>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.unileverfoodsolutions.co.th/th/chef-inspiration/world-cuisines/what-exactly-is-western-cuisine/jcr:content/parsys/content-aside-footer/columncontrol/columnctrl_parsys_2/image.img.jpg/1636869906304.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Western Food</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/160823141245-japan-food6-hiroshima-ramen-hiroshima-prefecturejnto.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_447"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Japanese Food</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
