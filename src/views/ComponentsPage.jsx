import React, { Component } from 'react'
import './ComponentsPage.less'

import Header from 'src/components/Header/Header';
import classNames from 'classnames';
import { FloatPlaceholder } from 'src/components/Input';

export default class ComponentsPage extends Component {
    render() {
        return (
            <div className="cp-page">
                <Header />
                <CpList>
                    <FloatPlaceholder placeholder="phone number" />
                </CpList>
            </div>
        );
    }
}

/**
 * @param {object} props
 * @param {string} props.className 
 * @param {React.ReactElement} props.children
 * @returns {JSX.Element}
 */
function CpList(props) {
    return (
        <div className={classNames("cp-list", props.className)}>
            {React.Children.map(props.children, child => {
                return (
                    <div className="cp-item">
                        { child }
                    </div>
                )
            })}
        </div>
    )
}