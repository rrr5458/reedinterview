import Dropdown from "./Dropdown";

interface HeaderProps {
  typeOptions: string[];
  setChargeId: (chargeId: number) => void;
  chargeId: number;
  sortProperty: number;
  onSortChange: (selectedSortProperty: number) => void;
  onResetSort: () => void;
}

const Header: React.FC<HeaderProps> = ({
  typeOptions,
  chargeId,
  sortProperty,
  onSortChange,
  onResetSort,
  setChargeId,
}: HeaderProps) => {
  const onResetClick = () => {
    onResetSort(); 
    setChargeId(0);
  };

  const handleSortChange = (value: number) => {
    onSortChange(value); 
  };

  return (
    <div className="header-container">
      <div>
        <Dropdown
          value={chargeId}
          setSelected={setChargeId}
          label="Type"
          options={typeOptions}
        />
      </div>
      <div>
        <Dropdown
          value={sortProperty}
          setSelected={handleSortChange}
          label="Sort By"
          options={["distance", "name", "rating", "price"]}
        />
      </div>
      <button onClick={onResetClick}>Reset</button>
    </div>
  );
};

export default Header;