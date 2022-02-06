import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 150 26" {...props}>
      <image width="150" height="26" href={isDark ? '/images/egg/LogoTextNewDark.png' : '/images/egg/LogoTextNewDark.png'}/>
    </Svg>
  )
};

export default Logo;