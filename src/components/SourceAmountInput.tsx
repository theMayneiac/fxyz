import React from "react";
interface SourceAmountInputProps {
  sourceAmount: string;
  setSourceAmount: (value: string) => void;
}

const SourceAmountInput: React.FC<SourceAmountInputProps> = ({
  sourceAmount,
  setSourceAmount,
}) => {
  const isNegative = Number(sourceAmount) < 0;
  return (
    <input
      style={{
        width: "20%",
        borderColor: isNegative ? "red" : undefined,
        outline: isNegative ? "2px solid red" : undefined,
        borderRadius: ".5em",
        fontSize: "2.5em",
        textAlign: "center",
      }}
      type="number"
      min={0}
      value={sourceAmount}
      onChange={(e) => setSourceAmount(e.target.value)}
    />
  );
};

export default SourceAmountInput;
