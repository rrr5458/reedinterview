import Dropdown from "./Dropdown";

/**
 * Renders a header element.
 */

interface HeaderProps {
  typeOptions: string[];
  setChargeId: (chargeId: number) => void;
  chargeId: number;
  sortProperty: number;
  onSortChange: (selectedSortProperty: number) => void;
  onResetSort: () => void;
}

const Header = ({
  typeOptions,
  chargeId,
  sortProperty,
  onSortChange,
  setChargeId,
}: HeaderProps) => {
  const onResetClick = () => {
    setChargeId(0);
  };

  const handleSortChange = (value: any) => {
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