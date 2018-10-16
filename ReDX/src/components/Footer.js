import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show <i className="fas fa-th-list"></i></span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
    <i className="fas fa-th-list"></i> All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
    <i className="fas fa-th-list"></i> Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
    <i className="fas fa-th-list"></i> Completed
    </FilterLink>
  </div>
)

export default Footer