import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

const ListIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <Defs>
      <LinearGradient
        id="b"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#00b0f0" />
        <Stop offset={1} stopColor="#00d8f9" />
      </LinearGradient>
      <ClipPath id="a">
        <Path
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 81"
          d="M1.756 20A1.78 1.78 0 0 1 0 18.2V1.8A1.781 1.781 0 0 1 1.756 0h12.488A1.78 1.78 0 0 1 16 1.8v16.4a1.78 1.78 0 0 1-1.756 1.8Zm.6-16.38v12.76a1.187 1.187 0 0 0 1.171 1.2h8.936a1.187 1.187 0 0 0 1.171-1.2V3.62a1.187 1.187 0 0 0-1.171-1.2H3.532a1.187 1.187 0 0 0-1.171 1.2Zm7.786 11.2v-.02a1.171 1.171 0 1 1 2.341 0v.02a1.235 1.235 0 0 1-.516 1 1.1 1.1 0 0 1-.654.2 1.186 1.186 0 0 1-1.167-1.2Zm-5.464 1.2a1.186 1.186 0 0 1-1.171-1.2v-.02a1.186 1.186 0 0 1 1.171-1.2H8.39a1.186 1.186 0 0 1 1.171 1.2v.02a1.186 1.186 0 0 1-1.171 1.2Zm0-3.2a1.185 1.185 0 0 1-1.171-1.2v-.02a1.186 1.186 0 0 1 1.171-1.2h6.634a1.186 1.186 0 0 1 1.171 1.2v.02a1.185 1.185 0 0 1-1.171 1.2Zm0-3.2a1.185 1.185 0 0 1-1.171-1.2V8.4a1.186 1.186 0 0 1 1.176-1.2h6.634a1.186 1.186 0 0 1 1.171 1.2v.02a1.185 1.185 0 0 1-1.171 1.2Zm0-3.2a1.186 1.186 0 0 1-1.171-1.2V5.2A1.186 1.186 0 0 1 4.683 4h6.634a1.186 1.186 0 0 1 1.171 1.2v.02a1.186 1.186 0 0 1-1.171 1.2Z"
          transform="translate(.221 -.233)"
          fill="#d1d1d1"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 45"
      transform="translate(1.779 .233)"
      clipPath="url(#a)">
      <Path
        data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 1689"
        transform="translate(-1.779 -.233)"
        fill="url(#b)"
        d="M0 0h20v20H0z"
      />
    </G>
  </Svg>
);

export default ListIcon;
