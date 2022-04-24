import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

const TimeIcon = props => (
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
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 59"
          d="M6.108 19.214A10.035 10.035 0 1 1 10 20a9.976 9.976 0 0 1-3.892-.786Zm.941-16.2A7.606 7.606 0 1 0 10 2.42a7.552 7.552 0 0 0-2.951.595Zm2.341 8.2a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h1.221a.6.6 0 0 1 .6.6v3.189H14.4a.6.6 0 0 1 .6.6v1.221a.6.6 0 0 1-.6.6Z"
          fill="url(#a)"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 31"
      clipPath="url(#b)">
      <Path
        data-name="\u041A\u043E\u043D\u0442\u0443\u0440 8"
        d="m.014-.216 20.179.044v20.193H0Z"
        transform="translate(-.191 -.02)"
        fill="url(#a)"
      />
    </G>
  </Svg>
);

export default TimeIcon;
