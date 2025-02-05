"use client"

import { useState } from "react";

const [amount, setAmount] = useState<string>("3.8");
const [baseCurrency, setBaseCurrency] = useState<string>("USD");
const [targetCurrency, setTargetCurrency] = useState<string>("BRL");
const [convertedAmount, setConvertedAmount] = useState<string | null>(null);

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!

export const handleConvert = async () => {
    const response = await fetch(API_URL, {
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