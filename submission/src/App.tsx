import { useEffect, useState, useMemo, useCallback } from "react";
import Header from "./components/Header";
import StationCard from "./components/StationCard";
import StationDetails from "./components/StationDetails";
import { typeOptions } from "./data/constants";
import fetchSearchResults from "./helpers/fetchResults";


const App = () => {
  const [stations, setStations] = useState([]);
  const [chargeId, setChargeId] = useState(0);
  const [selectedStation, setSelectedStation] = useState(null);
  const [sortProperty, setSortProperty] = useState(0); 

  useEffect(() => {
    const loadStations = async () => {
      const stations = await fetchSearchResults(chargeId);
      setStations(stations.stations);
    };

    loadStations();
  }, [chargeId]);


  const sortStations = useMemo(() => {
    return () => {
      const sortedStations = [...stations].sort((a, b) => {
        if (sortProperty === 0) {
          return a.distance - b.distance;
        } else if (sortProperty === 1) {
          return a.name.localeCompare(b.name);
        } else if (sortProperty === 2) {
          return b.rating - a.rating;
        } else if (sortProperty === 3) {
          return a.price - b.price;
        }
      });
      setStations(sortedStations);
    };
  }, [stations, sortProperty]);

  // useEffect(() => {
  //   console.log(stations)

  // }, [stations])

  useEffect(() => {
    sortStations()
  }, [sortProperty, sortStations])

  const handleSortChange = useCallback((selectedSortProperty: number) => {
    setSortProperty(selectedSortProperty);
  }, []);

  const resetSort = useCallback(() => {
    setSortProperty(0);
  }, []);

  const renderStationList = () => {
    return (
      <>
        <Header
          typeOptions={typeOptions}
          setChargeId={setChargeId}
          chargeId={chargeId}
          sortProperty={sortProperty}
          onSortChange={handleSortChange}
          onResetSort={resetSort}
        />
        <div className="station-container">
          {stations?.length > 0 ? (
            stations.map((station) => {
              return (
                <StationCard
                  onClick={() => setSelectedStation(station)}
                  key={station.id}
                  filterOption={typeOptions[chargeId]}
                  station={station}
                />
              );
            })
          ) : (
            <h2>No results to show.</h2>
          )}
        </div>
      </>
    );
  };

  const renderStationDetails = (station: any) => {
    return (
      <StationDetails
        onBackClick={() => setSelectedStation(null)}
        station={station}
      />
    );
  };

  return (
    <div className="main-container">
      {selectedStation === null
        ? renderStationList()
        : renderStationDetails(selectedStation)}
    </div>
  );
};

export default App;
