import React, { Fragment } from "react";

const Profile = ({ setAuth }) => {
  return (
    <Fragment>
      <h1>Profile</h1>
      <button onClick={() => setAuth(false)}>Logout</button>
    </Fragment>
  );
};

export default Profile;
