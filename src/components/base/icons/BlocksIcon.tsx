import {ReactComponent as BlocksSvg} from "../../../assets/svgs/blocks.svg"
import Icon from "./Icon"

export default class BlocksIcon extends Icon {
    render() {
        return <Icon {...this.props} svg={<BlocksSvg />} />
    }
}