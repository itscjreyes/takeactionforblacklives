import React from 'react';

const Result = props => (
    <a href={props.link} className="result" target="_blank" rel="noopener noreferrer">
        <div className="content-wrapper">
            <h3 className="title">{props.title}</h3>
            <p className="description">{props.description}</p>
        </div>
        <div className={`tag ${props.type}`}>{props.type}</div>
    </a>
)

export default Result;