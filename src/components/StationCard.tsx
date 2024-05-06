/**
 * Renders a station element.
 */

import sortTypes from "../helpers/sortTypes";
import { Station } from "../types";
import StarRating from "./StarRating";

interface StationCardProps {
  station: Station;
  filterOption: string;
  onClick: () => void;
}

const StationCard: React.FC<StationCardProps> = ({ station, filterOption, onClick }: StationCardProps) => {
  const { name, address, image, price, rating, types, distance } = station;
  const sortedTypes = sortTypes(types, filterOption);

  return (
    <div className="station-card" onClick={onClick} tabIndex={0} role="button">
      <div className="station-info">
        <div className="station-image">
          <img src={image} alt="station" />
        </div>
        <div className="station-description">
          <h3 className="station-name">{name}</h3>
          <p className="station-address">{address}</p>
          <div className="station-types">
            {sortedTypes.map((type, index) => (
              <p
                key={index}
                className={`${type === filterOption ? "selected" : ""}`}
              >
                {`${type}${sortedTypes.length - 1 !== index ? "," : ""}`}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="station-specs">
        <StarRating numStars={rating} />
        <div className="station-price">
          Price:{price}
          {Array(price)
            .fill(null)
            .map((_, index) => (
              <label key={index}>$</label>
            ))}
        </div>
        <div className="station-distance">
          <label>Miles: {distance}</label>
        </div>
      </div>
    </div>
  );
};

export default StationCard;
