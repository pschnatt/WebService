import "./profileCard.css"
import myImage from './profile.png';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
    const navigate = useNavigate();
    const handleHomePageClick = () => {
        navigate("/");
      };

    return (
        <div className="profilecard">
            <div className="profileContainer">
                <div className="profileAvatar">
                    <div className="profileIMG">
                        <img src={myImage} alt="Profile Avatar" />
                    </div>
                    <div className="profileName">
                        <p>Booking ID : {localStorage.getItem("bookingId")}</p>
                    </div>
                    <button className="editButton" onClick={handleHomePageClick}>Back To Home</button>
                </div>
                <div className="profileInfo">
                    <div className="profileInfoHeader">
                        <p>Booking Summary</p>
                    </div>
                    <div className="infoWrapper">
                        <div className="innerInfoWrapper">
                            Restaurant Name: {localStorage.getItem("restaurantName")}
                        </div>
                        <div className="innerInfoWrapper">
                            Date: {localStorage.getItem("date")}
                        </div>
                    </div>
                    <div className="infoWrapper">
                        <div className="innerInfoWrapper">
                            Price: {localStorage.getItem("price")}
                        </div>
                        <div className="innerInfoWrapper">
                            Seat: {localStorage.getItem("seat")}
                        </div>
                    </div>
                    <div className="infoWrapper">
                        <div className="innerInfoWrapper">
                            Status: {localStorage.getItem("status")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProfileCard