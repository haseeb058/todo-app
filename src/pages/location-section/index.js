import Button from "components/button";
import React from "react";

import style from "./location.module.scss";

const LocationPage = () => {
  return (
    <div className={style.mainWrapper}>
      <div className={style.btnWrapper}>
        <Button title={"+ Check In"} className={style.btnAdd} />
      </div>
      <div className={style.incompleteWrapper}>
        <h3>Current location</h3>
        {incompleteTask.map(({ title, longLat, index }) => (
          <div className={style.infoWrapper} key={index}>
            <div className={style.infoLabel}>
              <label>📍 {title}</label>
              <span>{longLat}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={style.completeWrapper}>
        <h3>Previous location</h3>
        {CompleteTask.map(({ title, longLat, index }) => (
          <div className={style.infoWrapper} key={index}>
            <div className={style.completeLabel}>
              <label>📍 {title}</label>
              <span>{longLat}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPage;

const incompleteTask = [
  {
    title: "Pustegränd, Stockholm, SE",
    longLat: "59.3293° N, 18.0686° E",
  },
];

const CompleteTask = [
  {
    title: "Halsingegätan, Stockholm, SE",
    longLat: "59.3293° N, 18.0686° E",
  },
  {
    title: "Pustegränd, Stockholm, SE",
    longLat: "59.3293° N, 18.0686° E",
  },
  {
    title: "Långa Gatan, Stockholm, SE",
    longLat: "59.3293° N, 18.0686° E",
  },
  {
    title: "Djurgården, Stockholm, SE",
    longLat: "59.3293° N, 18.0686° E",
  },
];
