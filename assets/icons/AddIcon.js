import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

const AddIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#00b0f0" />
        <Stop offset={1} stopColor="#00d8f9" />
      </LinearGradient>
      <ClipPath id="b">
        <Path
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 3"
          d="M0 10a10 10 0 1 1 10 10A10.011 10.011 0 0 1 0 10Zm2.42 0A7.579 7.579 0 1 0 10 2.42 7.588 7.588 0 0 0 2.42 10Zm6.98 5a.6.6 0 0 1-.6-.6v-3.19H5.611a.6.6 0 0 1-.6-.6V9.39a.6.6 0 0 1 .6-.6H8.8V5.6a.6.6 0 0 1 .6-.6h1.221a.6.6 0 0 1 .6.6v3.19h3.19a.6.6 0 0 1 .6.6v1.22a.6.6 0 0 1-.6.6h-3.19v3.19a.6.6 0 0 1-.6.6Z"
          fill="url(#a)"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 3"
      clipPath="url(#b)">
      <Path
        data-name="\u041A\u043E\u043D\u0442\u0443\u0440 8"
        d="m.015-.216 21.51.052v24.238H0Z"
        transform="translate(-1.17 -.885)"
        fill="url(#a)"
      />
    </G>
  </Svg>
);

export default AddIcon;
