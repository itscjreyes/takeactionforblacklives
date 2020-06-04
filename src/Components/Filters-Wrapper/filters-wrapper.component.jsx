import React from 'react';
import {LocationFilter} from '../Filters/filter.location.component';
import { TypeFilter } from '../Filters/filter.type.component';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        padding: '8px 5px 8px 10px',
        borderRadius: '30px',
        border: state.isFocused ? '1px solid #1f1f1f' : '1px solid #c8c8c8',
        cursor: 'pointer',
        outline: '0 !important'
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected || state.isFocused ? 'black' : '#666666',
        background: state.isSelected || state.isFocused ? '#e8e8e8' : 'transparent',
        padding: '15px 20px',
        width: 'auto',
        borderRadius: '30px',
        margin: '0 0 10px',
        transition: 'all 0.2s ease',
        cursor: 'pointer'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#c8c8c8 !important',
        '&:hover': '#c8c8c8'
    }),
    menu: (provided) => ({
        ...provided,
        background: 'white',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        borderRadius: '30px'
    }),
    menuList: (provided) => ({
        ...provided,
        padding: '0'
    })
  }

const FiltersWrapper = props => (
    <div className="filters-wrapper">
        <div className="container">
            <LocationFilter
                value={props.location}
                handleChange={props.handleLocationChange}
                styles={customStyles}
            />
            <TypeFilter 
                value={props.type}
                handleChange={props.handleTypeChange}
                styles={customStyles}
            />
        </div>
    </div>
)

export default FiltersWrapper;