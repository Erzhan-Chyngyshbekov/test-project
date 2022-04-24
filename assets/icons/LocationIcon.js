import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

const LocationIcon = props => (
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
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 26"
          d="M7.239 20c-.251 0-.807-.511-1.566-1.435a34.151 34.151 0 0 1-2.44-3.45 32.524 32.524 0 0 1-2.247-4.2A9.949 9.949 0 0 1 0 7.238a7.24 7.24 0 0 1 13.908-2.817 7.192 7.192 0 0 1 .569 2.817 9.957 9.957 0 0 1-.986 3.68 32.563 32.563 0 0 1-2.246 4.2 34.015 34.015 0 0 1-2.44 3.45C8.047 19.491 7.49 20 7.24 20ZM5.349 2.781A4.822 4.822 0 0 0 2.4 7.227 7.488 7.488 0 0 0 3.066 9.8a27 27 0 0 0 1.507 3.064 28.792 28.792 0 0 0 1.619 2.565c.492.683.857 1.076 1 1.076s.513-.392 1.013-1.075a28.846 28.846 0 0 0 1.643-2.566 26.905 26.905 0 0 0 1.53-3.064 7.4 7.4 0 0 0 .675-2.574 4.828 4.828 0 0 0-6.7-4.446ZM4.8 7.216a2.413 2.413 0 1 1 2.416 2.413A2.413 2.413 0 0 1 4.8 7.216Z"
          fill="url(#a)"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 18"
      transform="translate(2.762)"
      clipPath="url(#b)">
      <Path
        data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 216"
        transform="translate(-2.802)"
        fill="url(#a)"
        d="M0 0h20.015v20.015H0z"
      />
    </G>
  </Svg>
);

export default LocationIcon;
