import React, {Component} from 'react'
import Header from 'src/components/Header';
import Schedule from '../components/Schedule';

import './ComponentsPage.less'

export default class ComponentsPage extends Component {
    render(){
        return (
            <React.Fragment key="cp-page">
                <div className="cp-page">
                    <Header />
                    <div className='cp-list'>
                        <Schedule />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}