import React from 'react';
import {LocationFilter} from '../Filters/filter.location.component';
import { TypeFilter } from '../Filters/filter.type.component';

const FiltersWrapper = props => (
    <div className="filters-wrapper">
        <div className="container">
            <LocationFilter
                value={props.location}
                handleChange={props.handleLocationChange}
            />
            <TypeFilter 
                value={props.type}
                handleChange={props.handleTypeChange}
            />
        </div>
    </div>
)

export default FiltersWrapper;