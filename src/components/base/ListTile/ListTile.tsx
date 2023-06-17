import React, {CSSProperties, PureComponent} from 'react';
import classNames from 'classnames';
import RightIcon from '../icons/RigthIcon';
import './listTile.less'
import DefaultIcon from "@/components/base/icons/DefaultIcon";
import { Link } from "react-router-dom";

interface ListTileProps {
    readonly key?: string | number;
    leading?: React.ReactElement;
    leadingWarpProps?: {
        style?: CSSProperties & {hover?: string},
        className?: string,
    },
    tail?: React.ReactElement;
    tailWarpProps?: {
        style?: CSSProperties,
        className?: string,
    };
    title: string | React.ReactNode;
    desc?: string | React.ReactNode;
    className?: string;
    link?: string;
    style?: CSSProperties;
}
type ListTileState = {
    warpColor?: any;
    hoverWarpColor?: any;
}
export default class ListTile extends PureComponent<ListTileProps, ListTileState> {
    public static defaultProps: Partial<ListTileProps> = {
        leading: <DefaultIcon />,
        tail: <RightIcon fill='#d4237a' />,
        leadingWarpProps: {
            style: {
                background: '#f8f8f8',
                hover: '#DCFEFA52',
            }
        },
        tailWarpProps: {},
        title: 'Title',
        desc: 'to be or not to be'
    };
    constructor(props: ListTileProps) {
        super(props);
        this.state = {
            warpColor: props.leadingWarpProps?.style?.background,
        };
    }
    render() {
        const { link, style, className, leading, tail, leadingWarpProps, tailWarpProps, title, desc } = this.props;
        return (
            <Link
                to={link ?? ""}
                className={classNames('list-tile', className)}
                style={style}
                onMouseEnter={() => {this.setState({warpColor: leadingWarpProps?.style?.hover})}}
                onMouseLeave={() => {this.setState({warpColor: leadingWarpProps?.style?.background})}}
            >
                <div className={classNames('list-tile-leading', leadingWarpProps?.className)} style={Object.assign({ background: this.state.warpColor }, leadingWarpProps?.style)}>
                    { leading }
                </div>
                <div className='text-wrap'>
                    <div className='title-text'>{title}</div>
                    <p className='desc-text two-line'>{desc}</p>
                </div>
                <div className={classNames('list-tile-tail', tailWarpProps?.className)} style={tailWarpProps?.style}>
                    { tail }
                </div>
            </Link>
        )
    }
}