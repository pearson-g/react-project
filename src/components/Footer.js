import React from 'react';
import LinkFilter from '../containers/LinkFilter';
import {Filters} from '../redux/actions/index'

const Footer = () => (
    <div>
        <span>
            Show:
        </span>
        <LinkFilter filter={Filters.SHOW_ALL}>All</LinkFilter>
        <LinkFilter filter={Filters.SHOW_ACTIVE}>Show Active</LinkFilter>
        <LinkFilter filter={Filters.SHOW_COMPLETED}>Show Completed</LinkFilter>
    </div>
)

export default Footer