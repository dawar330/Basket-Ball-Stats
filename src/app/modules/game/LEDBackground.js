import * as React from "react";

function LEDBg(props) {
  const rows = 18; // Total number of rows
  const cols = 17; // Total number of columns
  const cellSize = 3.8; // Size of each cell (radius * 2)
  const radius = 1.8; // Radius of the circles

  const circles = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const fill = "black";
      circles.push(
        <circle
          key={`${row}-${col}`}
          cx={col * cellSize + radius}
          cy={row * cellSize + radius}
          r={radius}
          fill={fill}
        />
      );
    }
  }

  return (
    <svg
      width={cols * cellSize}
      height={rows * cellSize}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="transparent" />
      {circles}
    </svg>
  );
}

const LEDBackground = React.memo(LEDBg);
export default LEDBackground;
