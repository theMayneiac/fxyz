import { useEffect, useState } from "react";
import "./App.css";
import CoinSelectDropdown from "./components/CoinSelectDropdown";
import CoinImage from "./components/CoinInfoContainer";
import { getCoinPrice } from "./util/PriceUtil";
import { exchangeCoins } from "./constants/exchangeCoins";
import ExchangeFeedback from "./components/ExchangeFeedback";
import SourceAmountInput from "./components/SourceAmountInput";

function App() {
  const [sourceCoin, setSourceCoin] = useState("");
  const [targetCoin, setTargetCoin] = useState("");
  const [sourcePrice, setSourcePrice] = useState(1);
  const [targetPrice, setTargetPrice] = useState(3);
  const [isSourcePriceLoading, setIsSourcePriceLoading] = useState(false);
  const [isTargetPriceLoading, setIsTargetPriceLoading] = useState(false);
  const [sourceAmount, setSourceAmount] = useState("");

  const fetchAndSetPrice = async (
    coin: string,
    setPrice: (price: number) => void,
    setIsLoading: (loading: boolean) => void
  ) => {
    setIsLoading(true);
    const price = await getCoinPrice(
      exchangeCoins[coin as keyof typeof exchangeCoins]
    );
    console.log(exchangeCoins[coin as keyof typeof exchangeCoins]);
    setPrice(price);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAndSetPrice(sourceCoin, setSourcePrice, setIsSourcePriceLoading);
  }, [sourceCoin]);

  useEffect(() => {
    fetchAndSetPrice(targetCoin, setTargetPrice, setIsTargetPriceLoading);
  }, [targetCoin]);

  return (
    <div className="container">
      <h1>Exchange Rate</h1>
      <h3 style={{ marginBottom: "0.25em" }}>
        Select a Source and Target coin to see the exchange rate.
      </h3>
      <h4
        style={{
          marginRight: "2em",
          marginTop: "0.25em",
          marginBottom: "0.5em",
        }}
      >
        Number of Source Coins
      </h4>
      <SourceAmountInput
        sourceAmount={sourceAmount}
        setSourceAmount={setSourceAmount}
      />
      <div className="exchange-container">
        <div className="exchange-half source">
          <h2>Source Coin</h2>
          <CoinSelectDropdown
            selectedCoin={sourceCoin}
            handleUpdate={setSourceCoin}
          />
          <CoinImage
            selectedCoin={sourceCoin}
            coinSelection="source"
            isPriceLoading={isSourcePriceLoading}
            coinPrice={sourcePrice.toFixed(3)}
          />
        </div>

        <div className="exchange-half target">
          <h2>Target Coin</h2>
          <CoinSelectDropdown
            selectedCoin={targetCoin}
            handleUpdate={setTargetCoin}
          />
          <CoinImage
            selectedCoin={targetCoin}
            coinSelection="target"
            isPriceLoading={isTargetPriceLoading}
            coinPrice={targetPrice.toFixed(3)}
          />
        </div>
      </div>
      <ExchangeFeedback
        sourceCoin={sourceCoin}
        targetCoin={targetCoin}
        sourcePrice={sourcePrice}
        targetPrice={targetPrice}
        sourceAmount={sourceAmount}
        isSourcePriceLoading={isSourcePriceLoading}
        isTargetPriceLoading={isTargetPriceLoading}
      />
    </div>
  );
}

export default App;
