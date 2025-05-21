import React from "react";
import { exchangeCoins } from "../constants/exchangeCoins";

interface CoinImageProps {
  selectedCoin: string;
  coinSelection: string;
  isPriceLoading: boolean;
  coinPrice: string;
}

const CoinImage: React.FC<CoinImageProps> = ({
  selectedCoin,
  coinSelection,
  isPriceLoading,
  coinPrice,
}) => {
  if (!selectedCoin) return <div className="info-container" />;
  const exchangeCoin =
    exchangeCoins[selectedCoin as keyof typeof exchangeCoins];
  const imageUrl = exchangeCoin?.logo;
  const coinbaseUrl = exchangeCoin?.coinBaseUrl;

  if (isPriceLoading) {
    const imgElement = document.getElementById(`${coinSelection}`);
    imgElement?.classList.add("loading");
  }

  if (!isPriceLoading) {
    const imgElement = document.getElementById(`${coinSelection}`);
    imgElement?.classList.remove("loading");
  }

  return (
    <div className="info-container" key={`${coinSelection}`}>
      <a href={coinbaseUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} className="logo" id={`${coinSelection}`} />
      </a>
      {!isPriceLoading && (
        <h3 style={{ display: "inline" }}>${coinPrice} USD</h3>
      )}
    </div>
  );
};

export default CoinImage;
