import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const CalculateDistance = ({props}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  // Sample data with longitude and latitude coordinates
  const data = [
    { id: 1, longitude: -74.0060, latitude: 40.7128 },
    { id: 2, longitude: -118.2437, latitude: 34.0522 },
    // Add more data here
  ];

  useEffect(() => {
    // Filter the data based on distance
    const filterData = () => {
      const filtered = props.data.filter((item) => {
        const distance = calculateDistance(
          item.latitude,
          item.longitude,
          40.7128, // Latitude of the given point
          -74.0060 // Longitude of the given point
        );

        return distance <= 100; // Maximum distance in kilometers
      });

      setFilteredData(filtered);
      setOriginalData(data);
    };

    filterData();
  }, []);

  // Function to calculate distance between two points
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  };

  // Function to convert degrees to radians
  const toRadians = (angle) => {
    return (angle * Math.PI) / 180;
  };

  // Columns for DataTable
  const columns = [
    { name: "Park", selector: "AboutUs" },
    { name: "Longitude", selector: "Longitude" },
    { name: "Latitude", selector: "Latitude" },
  ];

  return (
    <DataTable
      title="Filtered Data"
      columns={columns}
      data={filteredData}
      // Add any additional DataTable props you need
    />
  );
};

export default CalculateDistance;
