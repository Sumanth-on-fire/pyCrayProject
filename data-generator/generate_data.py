import psycopg2
import random
import datetime

# Connect to PostgreSQL
conn = psycopg2.connect("dbname='postgres' user='postgres' host='localhost' password='pgAdmin@123'")
cur = conn.cursor()

# Generate property data
properties = [
    (1, 'John Doe', 'Green View Apartments', 50, 42, 8, 85.00, '2024-09-11'),
    (2, 'Jane Smith', 'Blue Sky Apartments', 60, 45, 15, 75.00, '2024-09-11'),
    (3, 'Mark Johnson', 'Red Rock Apartments', 60, 45, 15, 75.00, '2024-09-11')
]

# Insert property data
cur.executemany(
    "INSERT INTO pc.properties (id, owner_name, property_name, total_units, filled_units, vacant_units, occupancy_rate, last_maintenance_date) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)", 
    properties
)

# Generate occupancy data
# Note: Make sure property IDs are correct based on the inserted properties
occupancy_data = [
    (1, '2024-09-11', 50, 42, 8, 85.00),  # Make sure to provide values for all columns
    (2, '2024-09-11', 60, 45, 15, 75.00),
    (3, '2024-09-11', 60, 45, 15, 75.00)
]

# Insert occupancy data
cur.executemany(
    "INSERT INTO pc.occupancy (property_id, date, total_units, filled_units, vacant_units, occupancy_rate) VALUES (%s, %s, %s, %s, %s, %s)", 
    occupancy_data
)

# Generate financial data
# Note: Make sure property IDs are correct based on the inserted properties
financial_data = [
    (1, 25000, 15000),  # property_id 1
    (2, 25000, 15000),  # property_id 2
    (3, 25000, 15000)   # property_id 3
]

# Insert financial data
cur.executemany(
    "INSERT INTO pc.financial_records (property_id, income, expenses) VALUES (%s, %s, %s)", 
    financial_data
)

# Commit the transaction and close the connection
conn.commit()
cur.close()
conn.close()

print("Data generated and inserted successfully.")
