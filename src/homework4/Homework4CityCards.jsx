import React, { useState } from "react";
import CitySelector from "./CitySelector";
import CityCard from "./CityCard";
import { citiesData } from "./CitiesData";

function Homework4CityCards() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="homework4-container">
      <h2> Выбор города</h2>
      <CitySelector cities={citiesData} onCitySelect={handleCitySelect} />
      {selectedCity && <CityCard city={selectedCity} />}
    </div>
  );
}

export default Homework4CityCards;

