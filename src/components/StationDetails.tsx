/**
 * Renders the details view for a station.
 */

import { Station } from "../types";
import StarRating from "./StarRating";

interface StationDetailsProps {
  onBackClick: () => void;
  station: Station;
}

const StationDetails = ({ onBackClick, station }: StationDetailsProps) => {
  let { address, image, name, types, rating, distance, price } = station;
  return (
    <div className="station-details">
      <button onClick={onBackClick} className="button-back">
        Back
      </button>
      <div>
        <img src={image} alt="station" />
        <div className="station-description">
          <h3 className="station-name">{name}</h3>
          <p className="station-address">{address}</p>
          <p className="station-types">{types.replaceAll(",", ", ")}</p>
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
    </div>
  );
};

export default StationDetails;
