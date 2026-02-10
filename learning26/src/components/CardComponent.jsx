import React from "react";

export const CardComponent = ({ title, description }) => {
  return (
    <div className="container mt-5">
      <div className="card custom-card" style={{ width: "16rem" }}>
        <img
          src="https://picsum.photos/300/200"
          className="card-img-top"
          alt="image"
          style={{ height: "200px", width: "100%" }}
        />

        <div className="card-body">
          <h5 className="card-title">{title || "TITLE"}</h5>
          <p className="card-text">{description || "DESCRIPTION"}</p>

          <button className="btn custom-btn">
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  );
};
