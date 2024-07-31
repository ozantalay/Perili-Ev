const HouseCard = ({ index, arrayLength, image, houseData }) => {
    return (
        <div className="house-card">
          <p>
            {arrayLength} / {index + 1}
          </p>
          <img src={image} alt="House" />
          <div>
            <ul>
              {Object.entries(houseData).map(([key, value]) => (
                <li key={key}>
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                  {typeof value === 'boolean' ? (value ? 'Evet' : 'Hayır') : value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
export default HouseCard