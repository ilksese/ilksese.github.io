import {ReactComponent as HappySvg} from "../../../assets/svgs/happy.svg"
import Icon from './Icon'

export default class PacManIcon extends Icon{
    render() {
        return <Icon {...this.props} svg={<HappySvg />}/>
    }
}