import {ReactComponent as RightSvg} from '../../../assets/svgs/rigth.svg'
import Icon from "./Icon";

export default class RightIcon extends Icon {
    render() {
        return <Icon {...this.props} svg={<RightSvg fill='#000' />} />;
    }
}