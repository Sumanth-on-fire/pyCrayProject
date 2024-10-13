// src/context/DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
export const DataContext = createContext();

// Create Provider Component
export const DataProvider = ({ children }) => {
    const [occupancyData, setOccupancyData] = useState([]);
    const [financialData, setFinancialData] = useState([]);
    const [propertiesData, setPropertyData] = useState([])
    const [loading, setLoading] = useState(true);

    // Fetch data from the Node.js backend
    const fetchData = async () => {
        try {
            setLoading(true);
            const propertiesResponse = await axios.get('http://localhost:5000/api/properties');
            const occupancyResponse = await axios.get('http://localhost:5000/api/occupancy');
            const financialResponse = await axios.get('http://localhost:5000/api/financial');
            setOccupancyData(occupancyResponse.data);
            setFinancialData(financialResponse.data);
            setPropertyData(propertiesResponse.data)
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ propertiesData, occupancyData, financialData, loading }}>
            {children}
        </DataContext.Provider>
    );
};
