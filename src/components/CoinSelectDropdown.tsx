import React from "react";
import { exchangeCoins } from "../constants/exchangeCoins";

interface CoinDropdownProps {
  selectedCoin: string;
  handleUpdate: (value: string) => void;
  label?: string;
}

const CoinSelectDropdown: React.FC<CoinDropdownProps> = ({
  selectedCoin,
  handleUpdate,
  label = "Select Currency",
}) => {
  return (
    <div className="coin-dropdown">
      <select
        className="dropdown"
        value={selectedCoin}
        onChange={(e) => handleUpdate(e.target.value)}
      >
        <option value="">{label}</option>
        {Object.keys(exchangeCoins).map((coinKey) => (
          <option key={coinKey} value={coinKey}>
            {coinKey.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CoinSelectDropdown;
