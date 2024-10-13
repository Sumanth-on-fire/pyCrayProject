// src/components/OverviewCard.js
import React from 'react';
import '../styles/Dashboard.css';

const OverviewCard = ({ title, value, description, backgroundColor }) => {
    return (
        <div className="overview-card" style={{ backgroundColor }}>
            <h3>{title}</h3>
            <h1>{value}</h1>
            <p>{description}</p>
        </div>
    );
};

export default OverviewCard;
