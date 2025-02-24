import React from "react";
import { SvgXml } from "react-native-svg";

interface SvgIconProps {
  source: string; // O SVG em formato de string (XML)
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  source,
  width = 24,
  height = 24,
  fill = "black",
  stroke,
  strokeWidth,
}) => {
  return (
    <SvgXml
      xml={source}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
};

export default SvgIcon;
