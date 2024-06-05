import React from 'react';

const FilterGeolocation = ({ city, geolocationData, setFilteredData }) => {
  React.useEffect(() => {
    if (city) {
      const filteredData = geolocationData.filter(data => data.city === city);
      setFilteredData(filteredData);
    }
  }, [city, geolocationData, setFilteredData]);

  return null;
};

export default FilterGeolocation;
