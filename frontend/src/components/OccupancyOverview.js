// src/components/OccupancyOverview.js
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import '../styles/OccupancyOverview.css';

const OccupancyOverview = () => {
    const {propertiesData, occupancyData, loading } = useContext(DataContext);

    if (loading) {
        return <div>Loading occupancy data...</div>;
    }

    return (
        <div className="occupancy-overview">
            <h2>Property Occupancy Overview</h2>
            <table>
                <thead>
                    <tr>
                        <th>Owner Name</th>
                        <th>Property Name</th>
                        <th>Total Units</th>
                        <th>Filled Units</th>
                        <th>Vacant Units</th>
                        <th>Occupancy Rate</th>
                        <th>Last Maintenance Date</th>
                    </tr>
                </thead>
                <tbody>
                    {propertiesData.map((property, index) => (
                        <tr key={index}>
                            <td>{property.owner_name}</td>
                            <td>{property.property_name}</td>
                            <td>{property.total_units}</td>
                            <td>{property.filled_units}</td>
                            <td>{property.vacant_units}</td>
                            <td>{property.occupancy_rate}</td>
                            <td>{property.last_maintenance_date.split('T')[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OccupancyOverview;
