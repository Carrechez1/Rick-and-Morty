import React from "react";

const LocationInfo = ({ location }) => {
  return (
    <article className="loc_info">
      <h2 className="loc_tit">
        <strong>{location?.name}</strong>
      </h2>
      <div className="loc_dat">
        <span>
          <p className="loc_p">Type: </p>
          {location?.type}
        </span>
        <span>
          <p className="loc_p">Dimension:</p> {location?.dimension}
        </span>
        <span>
          <p className="loc_p">Population:</p> {location?.residents.length}
        </span>
      </div>
    </article>
  );
};

export default LocationInfo;
