import React from 'react';

export const LocationTitle = props => (
    <div className="location-title">
        <div className="container">
            <h2>{props.location.replace(/-/g, ' ')}</h2>
        </div>
    </div>
)