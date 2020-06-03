import React from 'react';
import Form from '../Form/form.component';

const Header = () => (
    <div className="header">
        <div className="container">
            <h1><span className="highlight">T</span>ake <span className="highlight">A</span>ction for <span className="highlight">B</span>lack&nbsp;<span className="highlight">L</span>ives</h1>
            <p>A list of funds, petitions, organizations, events and other resources at the city, state/province, and national level.</p>
            <Form />
        </div>
    </div>
)

export default Header;