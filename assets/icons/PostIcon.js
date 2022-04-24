import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

const PostIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={19.997} height={20} {...props}>
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
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 69"
          d="M9.53 19.906a1.187 1.187 0 0 1-.324-.071L.95 16.762a1.2 1.2 0 0 1-.348-.2A1.212 1.212 0 0 1 0 15.513V4.392a.967.967 0 0 1 .332-.731 1.212 1.212 0 0 1 .618-.514L9.206.075a1.18 1.18 0 0 1 .78-.017 1.181 1.181 0 0 1 .78.017l8.257 3.073a1.21 1.21 0 0 1 .589.47.968.968 0 0 1 .388.774v11.121a1.6 1.6 0 0 1-.976 1.248l-8.256 3.073a1.192 1.192 0 0 1-.29.068 1.215 1.215 0 0 1-.945 0Zm-.743-2.864v-8.11a1.212 1.212 0 0 1 .035-.291L6.6 7.812l.008.47a1.217 1.217 0 0 1-1.19 1.253 1.233 1.233 0 0 1-1.236-1.224L4.157 6.9l-1.734-.641v8.414Zm2.424-8.11v8.1l6.363-2.368V6.249l-6.4 2.382a1.212 1.212 0 0 1 .037.301ZM9.986 6.438l5.4-2.008-1.445-.538L8.54 5.9Zm-4-1.487 5.4-2.008-1.4-.521L4.59 4.429Zm5.422 10.29a1.217 1.217 0 0 1 .716-1.572l.666-.239a1.236 1.236 0 0 1 1.566.755 1.216 1.216 0 0 1-.716 1.571l-.666.239a1.191 1.191 0 0 1-.4.07 1.247 1.247 0 0 1-1.163-.824Z"
          fill="url(#a)"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 39"
      clipPath="url(#b)">
      <Path
        data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 468"
        transform="translate(-.009 -.388)"
        fill="url(#a)"
        d="M0 0h20.017v20.465H0z"
      />
    </G>
  </Svg>
);

export default PostIcon;
