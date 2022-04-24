import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

const RubbleIcon = props => (
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
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 30"
          d="M6.108 19.214A10.033 10.033 0 1 1 10 20a9.967 9.967 0 0 1-3.892-.786Zm.941-16.2A7.6 7.6 0 1 0 10 2.42a7.555 7.555 0 0 0-2.951.596ZM7.8 15a.4.4 0 0 1-.4-.4v-.39h-.8a.4.4 0 0 1-.4-.4v-1.62a.4.4 0 0 1 .4-.4h.8v-.58h-.8a.4.4 0 0 1-.4-.4V9.19a.4.4 0 0 1 .4-.4h.8V5.4a.4.4 0 0 1 .4-.4h2.02a8.193 8.193 0 0 1 1.149.079 4.218 4.218 0 0 1 1.3.394 2.556 2.556 0 0 1 1.038.947 3.348 3.348 0 0 1 .432 1.736 3.718 3.718 0 0 1-.195 1.287 2.338 2.338 0 0 1-.536.861 2.871 2.871 0 0 1-1.473.744 7.7 7.7 0 0 1-1.623.141h-.1v.6h.98a.4.4 0 0 1 .4.4v1.62a.4.4 0 0 1-.4.4H9.82v.39a.4.4 0 0 1-.4.4Zm2.02-6.211h.033a.991.991 0 0 0 .717-.205.673.673 0 0 0 .17-.5.646.646 0 0 0-.341-.622 1.31 1.31 0 0 0-.579-.11Z"
          fill="url(#a)"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 21"
      clipPath="url(#b)">
      <Path
        data-name="\u041A\u043E\u043D\u0442\u0443\u0440 8"
        d="m.014-.216 20.575.044v20.545H0Z"
        transform="translate(0 -.374)"
        fill="url(#a)"
      />
    </G>
  </Svg>
);

export default RubbleIcon;
