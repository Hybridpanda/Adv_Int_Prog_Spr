import React, { Fragment, useState, useEffect } from "react";
import editFavour from "./editFavour";

const listFavours = ({ allFavours, setFavourChange }) => {
  console.log(allFavours);
  const [favours, setFavours] = useState([]); //empty array

  //delete favour function

  async function deleteFavour(id) {
    try {
      await fetch(`http://localhost:5000/profile/favours/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token },
      });

      setFavours(favours.filter((favour) => favour.favour_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  // async function getfavours() {
  //   const res = await fetch("http://localhost:5000/favours");

  //   const favoursArray = await res.json();

  //   setFavours(favoursArray);
  // }

  useEffect(() => {
    setFavours(allFavours);
  }, [allFavours]);

  console.log(favours);

  return (
    <Fragment>
      {" "}
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {favours.length !== 0 &&
            favours[0].todo_id !== null &&
            favours.map((favour) => (
              <tr key={favour.favour_id}>
                <td>{favour.description}</td>
                <td>
                  <editFavour
                    favour={favour}
                    setFavourChange={setFavourChange}
                  />
                </td>
                <td>
                  <button
                    onClick={() => deleteFavour(favour.favour_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default listFavours;
