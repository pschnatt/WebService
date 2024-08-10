import "./profileCard.css"
import myImage from './profile.png';
const name = "Michael Thompson"
const email = "MichaelThompson@gmail.com"
const firstName = "Michael"
const lastname = "Thompson"
const bDay = "19/15/1996"
const phone = "123456789"

const ProfileCard = () => {
  return (
    <div className="profilecard">
        <div className="profileContainer">
            <div className="profileAvatar">
                <div className="profileIMG">
                    <img src={myImage} alt="Profile Avatar" />
                </div>
                <div className="profileName">
                    <p>{name}</p>
                </div>
                <button className="editButton">Edit</button>
            </div>
            <div className="profileInfo">
                <div className="profileInfoHeader">
                    <p>Information</p>
                </div>
                <div className="infoWrapper">
                    <div className="innerInfoWrapper">
                        FirstName: {firstName}
                    </div>
                    <div className="innerInfoWrapper">
                        LastName: {lastname}
                    </div>
                </div>
                <div className="infoWrapper">
                    <div className="innerInfoWrapper">
                        Birthday: {bDay}
                    </div>
                    <div className="innerInfoWrapper">
                        Phone: {phone}
                    </div>
                </div>
                <div className="infoWrapper">
                    <div className="innerInfoWrapper">
                        Email: {email}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard