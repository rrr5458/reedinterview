import { StationData } from "../types"; // Assuming you have a type for the station data
import { Station } from "../types"; // Assuming you have a type for the station

// Requests the list of stations for a particular charger type and sorts them based on the provided sortProperty if it's defined.
const fetchSearchResults = async (chargeId: number, sortProperty: number | null | undefined): Promise<StationData> => {
  try {
    const response = await fetch(`https://api.byteboard.dev/data/v2/stations/${chargeId}`);
    const data = await response.json();

    if (data && data.stations) {
      let sortedStations = data.stations;

      if (sortProperty !== undefined && sortProperty !== null) {
        sortedStations = sortedStations.sort((a: Station, b: Station) => {
          if (sortProperty === 0) {
            return a.distance - b.distance;
          } else if (sortProperty === 1) {
            return a.name.localeCompare(b.name);
          } else if (sortProperty === 2) {
            return b.rating - a.rating;
          } else if (sortProperty === 3) {
            return a.price - b.price;
          }
          return 0; 
          // need to return a value if sortProperty is not handled
        });
      }

      return { stations: sortedStations };
    } else {
      console.error("Invalid data format received from server");
      return { stations: [] };
    }
  } catch (error) {
    console.error("Error:", error);
    return { stations: [] };
  }
};

export default fetchSearchResults;