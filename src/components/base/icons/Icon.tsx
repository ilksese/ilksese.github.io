import React, { PureComponent } from "react"
import { IconProps } from './intereface';
import classNames from "classnames";

export default class Icon extends PureComponent<IconProps>{
    static defaultProps: Partial<IconProps> = {
        size: 36,
        svg: <></>,
    }
    render() {
        const {iconWarpClassName, size, svg, ...svgProps} = this.props;
        return (
            <div className={classNames('icon-warp center', iconWarpClassName)} style={{width: size, height: size}}>
                {React.cloneElement(svg!, svgProps)}
            </div>
        );
    }
}