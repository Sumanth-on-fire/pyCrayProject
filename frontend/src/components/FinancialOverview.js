// src/components/FinancialOverview.js
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import '../styles/FinancialOverview.css';

const FinancialOverview = () => {
    const { propertiesData, financialData, loading } = useContext(DataContext);

    if (loading) {
        return <div>Loading financial data...</div>;
    }

    return (
        <div className="financial-overview">
            <h2>Financial Overview</h2>
            <table>
                <thead>
                    <tr>
                        <th>Owner Name</th>
                        <th>Property Name</th>
                        <th>Income</th>
                        <th>Expenses</th>
                        <th>Net Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {financialData.map((property, index) => (
                        <tr key={index}>
                            <td>{propertiesData.find(data=>data.id === property.id).owner_name}</td>
                            <td>{propertiesData.find(data=>data.id === property.id).property_name}</td>
                            <td>{property.income}</td>
                            <td>{property.expenses}</td>
                            <td>{property.net_profit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FinancialOverview;
