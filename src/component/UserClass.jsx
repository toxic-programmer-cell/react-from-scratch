import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    const { name, location, about } = this.props;
    return (
      <div>
        <h2>Name: {name}</h2>
        <h3>Location: {location} </h3>
        <h3>About: {about} </h3>
      </div>
    );
  }
}

export default UserClass;
