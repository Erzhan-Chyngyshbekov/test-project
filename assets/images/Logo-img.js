import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Rect,
  Circle,
  Text,
  TSpan,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Hero = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={258.414}
    height={72.674}
    {...props}>
    <Defs>
      <LinearGradient
        id="b"
        y1={0.5}
        x2={1}
        y2={0.5}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#c61e58" />
        <Stop offset={1} stopColor="#ec4e28" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={-40.293}
        y1={73.27}
        x2={-40.292}
        y2={73.289}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#938a8f" />
        <Stop offset={1} stopColor="#4a4548" />
      </LinearGradient>
      <LinearGradient
        id="a"
        y1={0.498}
        x2={1}
        y2={0.498}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#ea197d" />
        <Stop offset={1} stopColor="#351955" />
      </LinearGradient>
      <LinearGradient id="e" x1={0} y1={0.5} x2={1} y2={0.5} xlinkHref="#a" />
    </Defs>
    <G data-name="\u0414\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432">
      <Path
        data-name="\u041A\u043E\u043D\u0442\u0443\u0440 3713"
        d="M56.543 5.833 36.688 74.392l220.642 3.084 7.977-34.4-32.607-5.461 5.586-19.946Z"
        transform="translate(-7.5 -5.308)"
        stroke="rgba(0,0,0,0)"
        fill="url(#b)"
      />
      <G transform="translate(4.5 6.692)">
        <G transform="translate(-4.5 -6.69)" filter="url(#c)">
          <Rect
            data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 49"
            width={55}
            height={55}
            rx={12}
            transform="translate(4.5 6.69)"
            fill="#cb2451"
          />
        </G>
        <Rect
          data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 49"
          width={47}
          height={47}
          rx={8}
          transform="translate(4 4)"
          fill="#fff"
        />
        <G data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 1">
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 171"
            d="m26.527 16.478 1.706-1.367 1.165 6.424-4.166.733Z"
            fill="#efca9e"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 172"
            d="M24.225 19.96c1.367.547.957 2.324.957 2.324 1.706-.339 2.253-3.827 1.914-5.872l-2.87 3.548"
            fill="#e6b796"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 173"
            d="m26.155 7.937-6.9 3.893c-.612 1.914.2 2.668.273 3.417.066.344-.481 1.028-.82 1.438-.683.815.749 1.159 1.23.957.476.678-.64 1.443 1.476.623 0 0-1.821 1.219-.18 1.356 0 .886.137 2.663 4.44.066 1.3-.749 1.367-3.281 1.367-3.281l2.258-.826-3.144-7.655"
            fill="#efca9e"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 174"
            d="M845.512 49.286c4.576-2.526 7.655-.476 8.333.547 1.777 2.734 1.3 6.288-.476 9.153a2.345 2.345 0 0 1-1.575-1.569s1.3.344 1.367-2.324c.071-2.253-2.46-2.936-3.073.208l-.339.066c-.891-1.367-.071-3.412-1.914-3.685-1.575-.208-4.035 1.569-4.035 1.569-.612-.755-.137-2.936 1.711-3.964"
            transform="translate(-824.661 -41.075)"
            fill="url(#d)"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 175"
            d="M21.322 14.908c.066.476-.137.886-.41.957s-.481-.273-.547-.755-.071-.886.273-.886.612.2.683.683"
            fill="#fff"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 176"
            d="M26.242 14.701a1.788 1.788 0 0 1 1.23-1.979 2.735 2.735 0 0 0-.476 2.663.787.787 0 0 1-.754-.683"
            fill="#e6b796"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 177"
            d="M22.137 17.648a4.925 4.925 0 0 1-.9 1.154c-.618.476-.755.273-.41-.071a7.31 7.31 0 0 1 .749-.612l.547-.47"
            fill="#a7415d"
          />
          <G data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 48">
            <Path
              data-name="\u041A\u043E\u043D\u0442\u0443\u0440 178"
              d="M41.513 42.236a2.493 2.493 0 0 0 1.957 2.931l1.165-5.807a1.241 1.241 0 0 0-1.006-1.433l-1.23-.2-.886 4.511m-24.118 2.734a2.493 2.493 0 0 0-2.93 1.957l5.878 1.094a1.312 1.312 0 0 0 1.5-.957l.273-1.23-4.713-.891"
              fill="#d3976e"
            />
          </G>
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 182"
            d="M35.909 36.429a5.155 5.155 0 0 1-2.46-3.762h-8.606s-3.942.908-5.807 3.964-1.64 8.267-1.64 8.267l4.647.957s-.5-4.1 1.3-6.424 5.878-2.87 5.878-2.87a7.07 7.07 0 0 0 3.827 4.035c3.078 1.416 8.475 1.64 8.475 1.64l.886-4.582s-4.263.016-6.5-1.225Z"
            fill="#4a585b"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 183"
            d="m32.914 32.657-2.668-12.5-6.692 1.23a1.639 1.639 0 0 0-.754.41s-2.286 3.149-3.073 3.209-4.1-1.433-4.1-1.433l-.866 2.523 4.987 1.706a1.307 1.307 0 0 0 1.575-.547l2.455-2.6.547 7.994h8.59"
            fill="#3acaf5"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 184"
            d="m15.193 25.002.547-1.165a.8.8 0 0 0-.366-1.094h-.044l-.612-.273a.815.815 0 0 0-.891.137 1.834 1.834 0 0 0-2.592.957 1.512 1.512 0 0 0 .82 2.253c2.318.957 2.318.957 3.138-.82"
            fill="#efca9e"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 201"
            d="m15.225 25.002.547-1.159a.809.809 0 0 0-.372-1.094h-.038l-.618-.273a.815.815 0 0 0-.886.137c-.82-.273-2.5.984-.924 1.733 2.324.957 1.471 2.433 2.291.656"
            fill="#efca9e"
          />
          <G
            data-name="\u042D\u043B\u043B\u0438\u043F\u0441 4"
            transform="translate(20.48 15.226)">
            <Circle
              data-name="\u042D\u043B\u043B\u0438\u043F\u0441 5"
              cx={0.323}
              cy={0.323}
              r={0.323}
              fill="#fff"
            />
            <Circle
              data-name="\u042D\u043B\u043B\u0438\u043F\u0441 6"
              cx={0.153}
              cy={0.153}
              r={0.153}
              transform="translate(.169 .169)"
              fill="none"
              stroke="#80cce3"
            />
          </G>
          <G
            data-name="\u042D\u043B\u043B\u0438\u043F\u0441 5"
            transform="translate(27.238 15.548)">
            <Circle
              data-name="\u042D\u043B\u043B\u0438\u043F\u0441 7"
              cx={0.323}
              cy={0.323}
              r={0.323}
              fill="#fff"
            />
            <Circle
              data-name="\u042D\u043B\u043B\u0438\u043F\u0441 8"
              cx={0.153}
              cy={0.153}
              r={0.153}
              transform="translate(.169 .169)"
              fill="none"
              stroke="#2b292f"
            />
          </G>
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 18"
            d="m867.317 90.479-7.327-4.374V80.2l7.327 4.374Z"
            transform="translate(-832.113 -55.636)"
            fill="url(#a)"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 19"
            d="M873.39 84.59v5.889l7.327-4.374V80.2Z"
            transform="translate(-838.186 -55.636)"
            fill="url(#a)"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 20"
            d="m860 76.574 7.327 4.374 7.327-4.374-7.327-4.374Z"
            transform="translate(-832.117 -52.01)"
            fill="url(#e)"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 21"
            d="m39.529 26.347-7.3-4.374-1.378.826 7.327 4.374Z"
            fill="#fff"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 22"
            d="m36.871 21.722-1.64-1.012-1.334.831 1.64.984Z"
            fill="#d0d0d0"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 23"
            d="m39.507 26.369-1.285.782v2.105l1.285-.782Z"
            fill="#d3976e"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 24"
            d="m42.186 25.226-1.307.776v2.114l1.307-.782Zm-4.784 4.921-1.766 1.05v2.887l1.766-1.094Z"
            fill="#fff"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 25"
            d="m38.222 33.006 1.285-.776v-2.105l-1.285.776Z"
            fill="#fff"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 179"
            d="m39.874 25.357-2.253-4.642a1.476 1.476 0 0 0-1.5-.755l-5.123.208a1.268 1.268 0 0 0-1.3 1.241v.126a1.378 1.378 0 0 0 1.438 1.279s3.795-.454 4.505-.137 1.848 3.893 1.848 3.893l2.389-1.23"
            fill="#3acaf5"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 180"
            d="m38.577 25.63-1.23.481a.8.8 0 0 0-.508 1.022v.073l.208.612a.793.793 0 0 0 .749.547 1.846 1.846 0 0 0 2.526 1.165 1.515 1.515 0 0 0 1.028-2.187c-.957-2.395-.957-2.395-2.8-1.711"
            fill="#efca9e"
          />
          <Path
            data-name="\u041A\u043E\u043D\u0442\u0443\u0440 181"
            d="M38.095 28.282c1.028-.41.481-1.5.208-2.258-.071-.137-.208-.066-.208.071.208.612.82 1.64-.066 2.05-.071 0 0 .137.066.137"
            fill="#e6b796"
          />
        </G>
      </G>
      <Text
        data-name="\u0417\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"
        transform="rotate(2 -864.797 1776.916)"
        fill="#fff"
        fontSize={26}
        fontFamily="Ubuntu-Bold, Ubuntu"
        fontWeight={700}>
        <TSpan x={0} y={0}>
          {'\u0417\u0430\u0431\u0440\u0430\u0442\u044C '}
        </TSpan>
        <TSpan x={0} y={26}>
          {
            '\u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437'
          }
        </TSpan>
      </Text>
    </G>
  </Svg>
);

export default Hero;
