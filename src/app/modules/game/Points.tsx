import React from "react";
import LEDBackground from "./LEDBackground";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
interface PointsProps {
  Score: number;
}

/**
 *
 */
const Points = ({ Score }: PointsProps): JSX.Element => {
  return (
    <div>
      {/* <Image src="./LEDBackground.svg" /> */}
      <div style={{}}>
        <LEDBackground />
      </div>
      <div
        className="LEDFontScore "
        style={{ position: "absolute", left: "0.25rem", top: 1 }}
      >
        {" "}
        {Score}
      </div>
    </div>
  );
};
// #endregion

export default Points;
