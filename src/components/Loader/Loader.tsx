import React, { FC } from "react";
import "./loader.css";
const Loader: FC = () => {
  return (
    <div className="spinner">
      <div className="part"></div>
      <div className="part"></div>
      <div className="part"></div>
    </div>
  );
};
export { Loader };
