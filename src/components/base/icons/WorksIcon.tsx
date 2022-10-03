import {ReactComponent as WorksSvg} from "../../../assets/svgs/works.svg"
import Icon from "./Icon"

export default class WorksIcon extends Icon{
    render() {
        return <Icon {...this.props} svg={<WorksSvg />} />;
    }
}