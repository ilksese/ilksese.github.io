import React, { PureComponent } from 'react';
import classNames from 'classnames';
import BlocksIcon from './icons/BlocksIcon';
import RightIcon from './icons/RigthIcon';
import { IconProps, SVG } from './icons/intereface';
import './listTile.less'

interface ListTileProps {
    readonly key?: string | number;
    leading?: React.ReactElement;
    leadingStyle?: IconProps;
    tail?: React.ReactElement;
    tailStyle?: IconProps;
    title: string | React.ReactNode;
    desc?: string | React.ReactNode;
    className?: string;
    link?: string;
    style?: React.CSSProperties;
}
type ListTileState = {
    leadingBackground?: string;
    leadingHoverBackground?: string;
}
export default class ListTile extends PureComponent<ListTileProps, ListTileState> {
    public static defaultProps: Partial<ListTileProps> = {
        leadingStyle: {background: '#f8f8f8', hover: '#f8f8f8'},
        tailStyle: {},
    };
    constructor(props: ListTileProps) {
        super(props);
        this.state = {
            leadingBackground: this.props.leadingStyle!.background,
        };
    }
    render() {
        const { leading, tail, leadingStyle, tailStyle } = this.props;
        const cpLeading:SVG = React.cloneElement(leading || <BlocksIcon />, leadingStyle);
        tailStyle!.iconWarpClassName ??= 'icon-tail-warp';
        const cpTail:SVG = React.cloneElement(tail || <RightIcon />, tailStyle);
        return (
            <a href={this.props.link}
            className={classNames('list-tile', this.props.className)}
            style={this.props.style}
            onMouseEnter={() => {this.setState({leadingBackground: this.props.leadingStyle!.hover})}}
            onMouseLeave={() => {this.setState({leadingBackground: this.props.leadingStyle!.background})}}
            >
                <div className='icon-leading' style={{ background: this.state.leadingBackground }}>
                    { cpLeading }
                </div>
                <div className='text-wrap'>
                    <div className='title-text'>{this.props.title || ""}</div>
                    <p className='desc-text two-line'>{this.props.desc || ""}</p>
                </div>
                {cpTail}
            </a>
        )
    }
}