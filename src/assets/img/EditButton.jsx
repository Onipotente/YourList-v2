import React from "react";

import { Svg, Path, G, Defs, ClipPath } from "react-native-svg";

function Icon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="54"
      fill="none"
      viewBox="0 0 50 54"
    >
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22.917 11.25H12.5c-1.105 0-2.165.474-2.946 1.318-.782.844-1.22 1.989-1.22 3.182V40.5c0 1.194.438 2.338 1.22 3.182.781.844 1.84 1.318 2.946 1.318h22.917c1.105 0 2.164-.474 2.946-1.318.781-.844 1.22-1.989 1.22-3.182V29.25M36.638 8.069c.384-.43.844-.773 1.352-1.009a3.904 3.904 0 011.608-.365 3.898 3.898 0 011.614.335c.512.226.978.56 1.369.983.391.422.7.925.91 1.478.21.553.315 1.145.31 1.743a4.809 4.809 0 01-.338 1.737 4.525 4.525 0 01-.934 1.46L24.642 33.75H18.75v-6.363L36.638 8.068z"
      ></Path>
    </Svg>
  );
}

export default Icon;