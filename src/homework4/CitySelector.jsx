import "./CitySelector.css";

function CitySelector({ cities, onCitySelect }) {
  const handleChange = (e) => {
    const city = cities.find((c) => c.name === e.target.value);
    onCitySelect(city);
  };

  return (
     <div className="city-selector-container">
    <select onChange={handleChange} defaultValue="" className="city-selector">
      <option value="" disabled>Выберите город</option>
      {cities.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
    </div>
  );
}

export default CitySelector;
