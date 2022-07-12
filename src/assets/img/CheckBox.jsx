import React from "react";

import { Svg, Path, G, Defs, ClipPath } from "react-native-svg";

function Icon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 50 50"
    >
      <Path
        fill="#000"
        d="M0 12.5A12.5 12.5 0 0112.5 0h25A12.5 12.5 0 0150 12.5v25A12.5 12.5 0 0137.5 50h-25A12.5 12.5 0 010 37.5v-25zm12.5-6.25a6.25 6.25 0 00-6.25 6.25v25a6.25 6.25 0 006.25 6.25h25a6.25 6.25 0 006.25-6.25v-25a6.25 6.25 0 00-6.25-6.25h-25z"
      ></Path>
    </Svg>
  );
}

export default Icon;