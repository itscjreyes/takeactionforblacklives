import React from 'react';
import Select from 'react-select';

const options = [
    { value: '', label: 'All'},
    { value: 'event', label: 'Events' },
    { value: 'fund', label: 'Funds' },
    { value: 'organization', label: 'Organizations' },
    { value: 'petition', label: 'Petitions' },
    { value: 'resource', label: 'Other Resources' },
]

export const TypeFilter = props => {
    const value = props.value === '' ? '' : props.v

    return (
        <div className="filter">
            <h3>Filter by Type</h3>
            <Select
                value={value}
                options={options}
                onChange={props.handleChange}
                isSearchable={false}
                styles={props.styles}
            />
        </div>
    )
}