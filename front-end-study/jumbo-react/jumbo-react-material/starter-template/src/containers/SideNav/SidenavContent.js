import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


class SidenavContent extends Component {
    componentDidMount() {
        const {history} = this.props;

        const pathname = `#${history.location.pathname}`;// get current path
        const menuLi = document.getElementsByClassName('menu');
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].onclick = function () {
                for (let j = 0; j < menuLi.length; j++) {
                    if (menuLi[j].classList.contains('open')) {
                        menuLi[j].classList.remove('open')
                    }
                }
                this.classList.toggle('open');
            }
        }
        const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
        try {
            const activeNav = this.closest(activeLi, 'ul'); // select closest ul
            if (activeNav.classList.contains('sub-menu')) {
                this.closest(activeNav, 'li').classList.add('open');
            } else {
                this.closest(activeLi, 'li').classList.add('open');
            }
        }

        catch (error) {

        }
    }

    closest(el, selector) {
        try {
            let matchesFn;
            // find vendor prefix
            ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
                if (typeof document.body[fn] == 'function') {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            let parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](selector)) {
                    return parent;
                }
                el = parent;
            }
        } catch (error) {

        }

        return null;
    }

    render() {
        return (
            <CustomScrollbars className="scrollbar">
                <ul className="nav-menu">

                    <li className="nav-header"><IntlMessages id="sidebar.main"/></li>
                    <li className="menu no-arrow">
                        <NavLink to="/app/sample-page">
                            <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"/>
                            <span className="nav-text"><IntlMessages id="pages.samplePage"/> </span>
                        </NavLink>
                    </li>
                </ul>
            </CustomScrollbars>
        );
    }
}

export default withRouter(SidenavContent);
