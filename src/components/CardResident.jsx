import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const CardResident = ({ url }) => {
  const resident = useFetch(url);
  let col;

  if (resident?.status === "Dead") {
    col = {
      color: `red`,
    };
  } else if (resident?.status === "unknown") {
    col = {
      color: `grey`,
    };
  }

  return (
    <article className="res">
      <header className="res_head">
        <span className="res_stat">
          <i style={col} className="bx bxs-circle"></i>
          &nbsp;&nbsp;
          {resident?.status}
        </span>
        <img
          className="res_img"
          src={resident?.image}
          alt={`image of ${resident?.name}`}
        />
      </header>
      <div>
        <h3>{resident?.name}</h3>
        <hr />
        <div className="res_inf">
          <span>
            <p className="res_d">Race: </p>
            <p className="res_p">{resident?.species}</p>
          </span>

          <span>
            <p className="res_d">Source: </p>
            <p className="res_p">{resident?.origin.name}</p>
          </span>

          <span>
            <p className="res_d">appearance in episodes:</p>
            <p className="res_p">{resident?.episode.length}</p>
          </span>
        </div>
      </div>
    </article>
  );
};

export default CardResident;
