import TEST_DATA from "../data/testData";


// Requests the list of stations for a particular charger type.
const fetchSearchResults = async (chargeId: number) => {

  try {
    const response = await fetch(`https://api.byteboard.dev/data/v2/stations/${chargeId}`)
    const data = await response.json();
    return data
  } catch (error) {
    console.error("Error:", error)
    return []
  }

};

export default fetchSearchResults;
