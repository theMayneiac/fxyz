import React from "react";
interface ExchangeFeedbackProps {
  sourceCoin: string;
  targetCoin: string;
  sourcePrice: number;
  targetPrice: number;
  sourceAmount: string;
  isSourcePriceLoading: boolean;
  isTargetPriceLoading: boolean;
}

const ExchangeFeedback: React.FC<ExchangeFeedbackProps> = ({
  sourceCoin,
  targetCoin,
  sourcePrice,
  targetPrice,
  sourceAmount,
  isSourcePriceLoading,
  isTargetPriceLoading,
}) => {
  const isNegative = Number(sourceAmount) < 0;
  return (
    <>
      {sourceAmount && sourceCoin && targetCoin && !isNegative && (
        <div id="exchange-rate-text">
          For your {sourceAmount}{" "}
          <span id="source-coin-name">{sourceCoin.toUpperCase()}</span> you can
          get{" "}
          {!(isSourcePriceLoading || isTargetPriceLoading)
            ? ((sourcePrice * Number(sourceAmount)) / targetPrice).toFixed(3)
            : "???"}{" "}
          <span id="target-coin-name">{targetCoin.toUpperCase()}</span>
        </div>
      )}
      {isNegative && (
        <div id="exchange-rate-text">
          Please enter a positive number of coins.
        </div>
      )}
    </>
  );
};

export default ExchangeFeedback;
