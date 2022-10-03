import {Component} from 'react';
import PacManIcon from './base/icons/PacManIcon';
import RightIcon from './base/icons/RigthIcon';
import WorksIcon from './base/icons/WorksIcon';
import ListTile from './base/ListTile';
import './header.less'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="logo-text">ilksese</div>
                <ul className="site-nav">
                    <li>
                        <a href="#!">灵感</a>
                        <div className='site-nav-hover-menu'>
                            <ListTile
                                title='Discovers'
                                leading={<WorksIcon />}
                                leadingStyle={{hover: "rgba(248,198,48,0.1)"}}
                                desc='Learn product design in just 16 weeks...'
                                tail={<RightIcon />}
                                tailStyle={{fill: '#f8c630'}}
                            />
                            <ListTile
                                title='Discovers'
                                leading={<WorksIcon />}
                                leadingStyle={{hover: "rgba(248,198,48,0.1)"}}
                                desc='Learn product design in just 16 weeks...'
                                tailStyle={{fill: '#f8c630'}}
                            />
                            <ListTile
                                title='Discovers'
                                className='yellow'
                                leading={<WorksIcon />}
                                leadingStyle={{hover: "rgba(248,198,48,0.1)"}}
                                desc='Learn product design in just 16 weeks...'
                                tailStyle={{fill: '#f8c630'}}
                            />
                        </div>
                    </li>
                    <li>
                        <a href="#!">收获</a>
                        <div className='site-nav-hover-menu'>
                            <ListTile title="收获" />
                        </div>
                    </li>
                    <li>
                        <a href="#!">闲言</a>
                        <div className='site-nav-hover-menu'>
                            <ListTile title="Blog" desc="Mybe blog" tailStyle={{hover: '#74c4ba'}}/>
                        </div>
                    </li>
                    <li>
                        <a href="#!">释放</a>
                        <div className='site-nav-hover-menu'>
                            <ListTile
                                title="酱紫"
                                desc='yysy, qs'
                                leading={<PacManIcon />}
                                leadingStyle={{hover: "rgba(238, 136, 126, 0.1)"}}
                                tailStyle={{fill: '#e54f6d'}}
                            />
                        </div>
                    </li>
                    <li>
                        <a href="#!">口袋</a>
                        <div className='site-nav-hover-menu'>
                            <ListTile title="口袋" />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;