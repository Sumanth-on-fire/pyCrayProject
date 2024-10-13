// src/App.js
import React from 'react';
import { DataProvider } from './context/DataContext';
import OverviewCard from './components/OverviewCard';
import OccupancyOverview from './components/OccupancyOverview';
import FinancialOverview from './components/FinancialOverview';
import './styles/Dashboard.css';

const App = () => {
    return (
        <DataProvider>
            <div className="dashboard-container">
                <h1>Dashboard</h1>

                {/* Overview Cards */}
                <div className="overview-cards-container">
                    <OverviewCard title="Number of Properties" value="3" description="Lorem ipsum" backgroundColor="#E1EAFE" />
                    <OverviewCard title="Average Occupancy Rate" value="80%" description="Lorem ipsum" backgroundColor="#DBF5E1" />
                    <OverviewCard title="Average Vacancy Rate" value="85%" description="Lorem ipsum" backgroundColor="#FDE0E0" />
                    <OverviewCard title="Overall Net Profit" value="$50,000" description="Lorem ipsum" backgroundColor="#FFF4D1" />
                </div>

                {/* Occupancy Overview */}
                <OccupancyOverview />

                {/* Financial Overview */}
                <FinancialOverview />
            </div>
        </DataProvider>
    );
};

export default App;
