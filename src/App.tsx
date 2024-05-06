import { useEffect, useState, useMemo, useCallback } from "react";
import Header from "./components/Header";
import StationCard from "./components/StationCard";
import StationDetails from "./components/StationDetails";
import { typeOptions } from "./data/constants";
import fetchSearchResults from "./helpers/fetchResults";
import { Station } from "./types"; // Assuming you have a types file defining Station type

const App: React.FC = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [chargeId, setChargeId] = useState<number>(0);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [sortProperty, setSortProperty] = useState<number>(0);

  useEffect(() => {
    const loadStations = async () => {
      const stationsData = await fetchSearchResults(chargeId, sortProperty);
      setStations(stationsData.stations);
    };

    loadStations();
  }, [chargeId, sortProperty]);

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
          {stations.length > 0 ? (
            stations.map((station) => (
              <StationCard
                onClick={() => setSelectedStation(station)}
                key={station.id}
                filterOption={typeOptions[chargeId]}
                station={station}
              />
            ))
          ) : (
            <h2>No results to show.</h2>
          )}
        </div>
      </>
    );
  };

  const renderStationDetails = (station: Station) => {
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
