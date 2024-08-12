import Navbar from "../../components/navbar/Navbar";
import ProfileCard from "../../components/profileCard/ProfileCard";
import "./completeBooking.css";

const completeBook = () => {
  return (
    <div>
      <Navbar />
      <div className="userContainer">
        <ProfileCard />
      </div>
    </div>
  );
};

export default completeBook