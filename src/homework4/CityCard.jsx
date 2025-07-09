import "./CityCard.css";

function CityCard({ city }) {
  if (!city) return <p className="no-selection">Пожалуйста, выберите город из списка.</p>;

  return (
    <div className="city-card">
      <h2 className="city-name">{city.name}</h2>
      <p className="city-description">{city.description}</p>
      {city.imageUrl && (
        <img src={city.imageUrl} alt={city.name} className="city-image" />
      )}
      <ul className="city-facts">
        {city.facts.map((fact, index) => (
          <li key={index} className="city-fact-item">{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
