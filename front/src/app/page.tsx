"use client"

import React, {useState} from "react";

const ApiFetchComponent: React.FC = () => {
  const [amount, setAmount] = useState<string>("3.8");
  const [baseCurrency, setBaseCurrency] = useState<string>("USD");
  const [targetCurrency, setTargetCurrency] = useState<string>("BRL");
  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);


  const handleConvert = async () => {

    const response = await fetch('https://f6gapsfeg2.execute-api.us-east-1.amazonaws.com/convert', {
      method: 'POST',
      body: JSON.stringify({
        amount: amount,
        base: baseCurrency,
        to: targetCurrency,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    const body = JSON.parse(data.body);
    setConvertedAmount(body.convertedAmount)
    }

    return (
      <div>
        <h1>Currency Converter</h1>
        <div>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            From:
            <select
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BRL">BRL</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            To:
            <select
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BRL">BRL</option>
            </select>
          </label>
        </div>
        <button style={{color : "blue"}} onClick={handleConvert}>Convert</button>
  
        {convertedAmount !== null && (
          <p>
            Converted Amount: {convertedAmount} {targetCurrency}
          </p>
        )}
      </div>
    );
  };

export default ApiFetchComponent;