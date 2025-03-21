import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const PeraSvg = (props: SvgProps) => (
  <Svg width={144} height={144} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#AFD05D"
        d="m93.942 37.545-30.864 2.062-14.345 36.017-28.803 43.384 9.569 33.468 43.844 12.089 12.145-4.053 8.69 5.488 39.931-22.396 2.813-40.989-28.941-25.71-14.04-39.36Z"
      />
      <Path
        fill="#fff"
        d="m80.112 44.732 12.242-1.95 11.407 37.09 29.958 24.624-8.189 3.858-27.02-26.519-9.22-35.07-9.178-2.033ZM130.655 115.22l-12.799 3.315-4.694 27.59-7.605 9.248 25.683-14.986-.585-25.167ZM97.953 144.148l-6.03-.418 2.562 6.699 7.409-2.744-3.941-3.537Z"
      />
      <Path
        fill="#216D2C"
        d="m88.218 157.908-12.967-.891-14.763-15.446-2.855-53.245 9.052-43.58 16.407-6.476-20.014 1.337-14.345 36.017-28.803 43.384 9.569 33.468 43.844 12.089 12.145-4.053 8.69 5.488 17.271-9.694-18.357 5.195-4.874-3.593Z"
        opacity={0.2}
      />
      <Path
        fill="#216D2C"
        d="m49.652 82.657-23.454 36.546 8.315 31.296 22.618 6.197-10.056-9.526-3.635-35.153 6.212-29.36Z"
        opacity={0.2}
      />
      <Path
        fill="#663819"
        d="m75.64 36.278 2.313.153 1.35-19.68L73.469.067S65.627-.936 61.964 4.857c6.992 6.532 11.95 12.925 11.95 12.925l1.713 18.496h.014Z"
      />
      <Path
        fill="#BBE842"
        d="M71.616 31.125S64.22 19.676 51.964 15.233C30.056 15.707 12.382 22.407.028 26.21c12.813 16.699 47.13 21.128 53.635 18.579l3.844-8.58 13.886-1.601.237-3.468-.014-.014Z"
      />
      <Path
        fill="#6DA350"
        d="m56.741 33.59 2.41-7.98-6.574 7.688-4.903-3.079 3.454-9.68-8.551 9.332-8.802-.599s7.45-6.755 8.091-9.359c.641-2.604-13.189 9.011-13.189 9.011l-12.507-.863 21.852-11.7C22.48 18.535 9.624 23.229 0 26.194c12.813 16.7 47.131 21.129 53.635 18.58l3.844-8.58 13.886-1.601-14.638-1.003h.014Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h144v144H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PeraSvg;
