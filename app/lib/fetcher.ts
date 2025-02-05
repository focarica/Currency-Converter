"use client"

import { useState } from "react";

const [amount, setAmount] = useState<string>("3.8");
const [baseCurrency, setBaseCurrency] = useState<string>("USD");
const [targetCurrency, setTargetCurrency] = useState<string>("BRL");
const [convertedAmount, setConvertedAmount] = useState<string | null>(null);

export const handleConvert = async () => {
    const response = await fetch('https://f6gapsfeg2.execute-api.us-east-1.amazonaws.com/convert', {
        method: 'POST',
        body: JSON.stringify({
        amount: amount,
        base: baseCurrency,
        to: targetCurrency,
        }),
    });

    const data = await response.json();
    const body = JSON.parse(data.body);

    return body
}    