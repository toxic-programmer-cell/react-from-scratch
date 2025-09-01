import react from "react";
import UserClass from "../component/UserClass";

const About = () => {
  const about =
    "Hii, I am Rohit. I am a Fullstack Developer and ofcourse i am the one who build this amazing food delivery app for amazing people like you.";
  return (
    <div>
      <h1>About Us</h1>
      <UserClass name={"Rohit Kumar"} location={"Delhi"} about={about} />
    </div>
  );
};

export default About;
