import Navbar from "../../components/navbar/Navbar";
import ProfileCard from "../../components/profileCard/ProfileCard";
import "./user.css";

const User = () => {
  return (
    <div>
      <Navbar />
      <div className="userContainer">
        <ProfileCard />
      </div>
    </div>
  );
};

export default User;
