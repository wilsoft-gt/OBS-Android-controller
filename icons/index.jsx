import Svg, {
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from "react-native-svg"

/*
export const  = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    //Reemplazar por el codigo svg
  </Svg>
)
*/

export const Photo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z" />
    <Path d="m3 16 5-5c.928-.893 2.072-.893 3 0l5 5" />
    <Path d="m14 14 1-1c.928-.893 2.072-.893 3 0l3 3" />
  </Svg>
)

export const PhotoCheck = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M15 8h.01M11.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7" />
    <Path d="m3 16 5-5c.928-.893 2.072-.893 3 0l4 4" />
    <Path d="m14 14 1-1c.928-.893 2.072-.893 3 0l.5.5M15 19l2 2 4-4" />
  </Svg>
)

export const Settings = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z" />
    <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
  </Svg>
)

export const PhotoVideo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9 15H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
    <Path d="M9 12a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3zM3 12l2.296-2.296a2.41 2.41 0 0 1 3.408 0L9 10" />
    <Path d="M14 13.5v3l2.5-1.5zM7 6v.01" />
  </Svg>
)

export const VideoPlus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m15 10 4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4zM3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM7 12h4M9 10v4" />
  </Svg>
)

export const Broadcast = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20 || 20}
    height={props.size || 20 || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M18.364 19.364a9 9 0 1 0-12.728 0" />
    <Path d="M15.536 16.536a5 5 0 1 0-7.072 0" />
    <Path d="M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </Svg>
)

export const X = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M18 6 6 18M6 6l12 12" />
  </Svg>
)

export const Check = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m5 12 5 5L20 7" />
  </Svg>
)

export const OBS  = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 1000 1000`}
    width={props.size || 100}
    height={props.size || 100}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Defs>
      <RadialGradient
        id="radial-gradient"
        cx={512.06}
        cy={512.12}
        r={444.12}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.99} stopOpacity={0.5} />
        <Stop offset={1} stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="radial-gradient-2"
        cx={514.5}
        cy={516.5}
        r={496.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.913} />
        <Stop offset={1} stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="radial-gradient-3"
        cx={512.06}
        cy={512.12}
        r={486.27}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.99} stopColor="#fff" />
        <Stop offset={0.995} stopColor="#fdfdfd" />
        <Stop offset={0.997} stopColor="#f6f6f6" />
        <Stop offset={0.998} stopColor="#ebebeb" />
        <Stop offset={0.999} stopColor="#dadada" />
        <Stop offset={1} stopColor="#c7c7c7" />
      </RadialGradient>
      <RadialGradient
        xlinkHref="#radial-gradient"
        id="radial-gradient-5"
        cx={494.06}
        cy={492.12}
        r={444.12}
      />
      <RadialGradient
        id="radial-gradient-6"
        cx={5.295}
        cy={1029.3}
        r={4.653}
        gradientTransform="matrix(94.654 0 0 -94.654 -7.154 97921)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} />
        <Stop offset={1} stopColor="#322f32" />
      </RadialGradient>
      <RadialGradient
        id="radial-gradient-7"
        cx={578.89}
        cy={473.32}
        r={353.94}
        gradientTransform="matrix(1 0 0 1.0971 0 -45.942)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#c2c0c2" />
        <Stop offset={1} stopColor="#ebebeb" />
      </RadialGradient>
      <ClipPath id="clip-path" transform="translate(-18 -20)">
        <Path
          id="SVGID"
          d="M67.938 512.12c0 245.29 198.84 444.12 444.12 444.12s444.13-198.83 444.13-444.12c0-245.28-198.84-444.12-444.13-444.12S67.938 266.84 67.938 512.12"
          className="cls-1"
        />
      </ClipPath>
      <ClipPath id="clip-path-2" transform="translate(-18 -20)">
        <Path
          d="M71.603 512.12c0 243.26 197.2 440.46 440.46 440.46s440.46-197.19 440.46-440.46c0-243.26-197.2-440.46-440.46-440.46s-440.46 197.2-440.46 440.46"
          style={{
            fill: "none",
          }}
        />
      </ClipPath>
    </Defs>
    <G shapeRendering="geometricPrecision">
      <Path
        d="M514.5 20C788.71 20 1011 242.29 1011 516.5S788.71 1013 514.5 1013 18 790.71 18 516.5 240.29 20 514.5 20"
        style={{
          fill: "url(#radial-gradient-2)",
        }}
        transform="translate(-18 -20)"
      />
      <Path
        d="M512.06 25.849c268.56 0 486.27 217.71 486.27 486.27s-217.71 486.27-486.27 486.27-486.27-217.71-486.27-486.27S243.5 25.849 512.06 25.849"
        style={{
          fill: "url(#radial-gradient-3)",
        }}
        transform="translate(-18 -20)"
      />
      <Path
        d="M49.938 492.12c0 245.29 198.84 444.12 444.12 444.12s444.13-198.83 444.13-444.12c0-245.28-198.84-444.12-444.13-444.12S49.938 246.84 49.938 492.12"
        className="cls-1"
      />
    </G>
    <G
      clipPath="url(#clip-path)"
      style={{
        clipPath: "url(#clip-path)",
      }}
    >
      <Path
        d="M49.938 48h888.25v888.24H49.938z"
        shapeRendering="geometricPrecision"
        style={{
          fill: "url(#radial-gradient-5)",
        }}
      />
    </G>
    <G
      clipPath="url(#clip-path-2)"
      style={{
        clipPath: "url(#clip-path-2)",
      }}
    >
      <Path
        d="M53.603 51.665h880.92v880.91H53.603z"
        shapeRendering="geometricPrecision"
        style={{
          fill: "url(#radial-gradient-6)",
        }}
      />
    </G>
    <Path
      d="M684.91 370.5a199.24 199.24 0 0 1-277.24 70.456 202.75 202.75 0 0 1-44.913-37.773 198.92 198.92 0 0 1-49.898-141.13c.284-5.79.769-11.563 1.527-17.31a198.51 198.51 0 0 1 2.977-16.874q1.897-8.579 4.548-16.962 2.572-8.16 5.863-16.073c2.275-5.485 4.81-10.854 7.547-16.122 2.88-5.548 6.073-10.945 9.48-16.184q4.716-7.249 10.045-14.062c3.854-4.95 7.95-9.727 12.27-14.276q6.542-6.888 13.67-13.162c4.838-4.263 9.912-8.25 15.14-12.022q4.042-2.917 8.236-5.612a244.39 244.39 0 0 0-109.08 323.49q.82 1.704 1.668 3.395.384.768.774 1.534a4.6 4.6 0 0 0 .47.917c.324.359.405.299.9.29 2.578-.047 5.158-.035 7.736.02q7.144.155 14.266.815a199.58 199.58 0 0 1 178.16 166.37 201.33 201.33 0 0 1 .641 60.166 198.75 198.75 0 0 1-46.16 101.86 202.19 202.19 0 0 1-49.778 41.784 199.86 199.86 0 0 1-124.15 26.494 203.07 203.07 0 0 1-23.203-4.03 198.85 198.85 0 0 1-14.71-4.07 242.6 242.6 0 0 0 68.546 18.972 247.04 247.04 0 0 0 66.41-.798 243.53 243.53 0 0 0 108.67-44.887 246.04 246.04 0 0 0 59.733-63.074q1.042-1.587 2.058-3.19c.263-.415.85-1.069.774-1.509a8.495 8.495 0 0 0-1.05-1.945q-2.003-3.757-3.844-7.598-3.698-7.716-6.722-15.732a198.02 198.02 0 0 1-9.34-33.367 200.87 200.87 0 0 1 .04-73.98 197.88 197.88 0 0 1 21.357-59.255 199.08 199.08 0 0 1 173.09-103.06q7.337-.05 14.663.425 7.066.47 14.088 1.418 6.952.95 13.827 2.393 6.73 1.421 13.355 3.29 6.49 1.842 12.843 4.119 6.441 2.312 12.708 5.064 6.39 2.79 12.561 6.046 6.166 3.242 12.1 6.907a191.79 191.79 0 0 1 10.913 7.25q5.49 3.94 10.726 8.209c3.603 2.93 7.08 6.019 10.462 9.202q5.401 5.083 10.408 10.563 4.998 5.447 9.57 11.27c3.4 4.318 6.639 8.772 9.66 13.363a206.3 206.3 0 0 1 8.75 14.515 200.21 200.21 0 0 1 10.067 21.366 206.97 206.97 0 0 1 7.973 24.37 243.74 243.74 0 0 0-51.678-120.94 245.66 245.66 0 0 0-75.012-62.481 242.86 242.86 0 0 0-95.948-28.304q-4.267-.342-8.544-.534z"
      shapeRendering="geometricPrecision"
      style={{
        fill: "url(#radial-gradient-7)",
      }}
      transform="translate(-18 -20)"
    />
  </Svg>
)

export const CircleFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path fill={props.color} d="M7 3.34a10 10 0 1 1-4.995 8.984L2 12l.005-.324A10 10 0 0 1 7 3.34z" />
  </Svg>
)

export const Pause = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="currentColor"
    stroke="currentColor"
    {...props}
  >
    <Path d="M9 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm8 0h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
  </Svg>
)

export const SquareFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="currentColor"
    stroke="currentColor"
    {...props}
  >
    <Path d="M17 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
  </Svg>
)

export const PlugOff = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path fill={props.color} d="m16.123 16.092-.177.177a5.81 5.81 0 1 1-8.215-8.215l.159-.159M4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5M3 3l18 18" />
  </Svg>
)

export const Plug = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={props.size || 20}
    height={props.size || 20}
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path fill={props.color} d="M9.785 6 18 14.215l-2.054 2.054a5.81 5.81 0 1 1-8.215-8.215L9.785 6zM4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5" />
  </Svg>
)
