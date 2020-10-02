import React, { Fragment, useState, useEffect } from "react";

const Profile = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/profile", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <Fragment>
      <h1>Profile {name} </h1>

      <button className="btn btn-primary" onClick={(e) => logout(e)}>
        logout
      </button>
    </Fragment>
  );
};

export default Profile;
