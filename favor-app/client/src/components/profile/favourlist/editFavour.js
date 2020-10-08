import React, { Fragment, useState } from "react";

const editFavour = ({ favour, setFavourChange }) => {
  //editText function
  const [description, setDescription] = useState("");

  const editText = async (id) => {
    try {
      const body = { description };

      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      await fetch("http://localhost:5000/profile/favours/${id}", {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      setFavourChange(true);

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={"#id${favour.favour_id}"}
      >
        Edit
      </button>
      {/* id = "id21"*/}
      <div
        className="modal"
        id={"id${favour.favour_id}"}
        onClick={() => setDescription(favour.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit favour</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(favour.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText(favour.favour_id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(favour.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default editFavour;
