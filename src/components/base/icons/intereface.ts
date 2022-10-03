import { FunctionComponentElement, SVGAttributes } from 'react';

interface Empty {}

export interface SVG extends FunctionComponentElement<object>{}

export interface IconProps extends SVGAttributes<object>{
    size?: number | string;
    iconWarpClassName?: string;
    background?: string;
    hover?: string;
    svg?: SVG;
}