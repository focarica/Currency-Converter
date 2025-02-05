import { useState  } from "react";

export default function useCurrency(initialCurrency: string){
    const [ selectedCurrency, setSelectedCurrency ] = useState<string>(initialCurrency)

    const handleCurrencyChange = (currency: string) => {
        setSelectedCurrency(currency)
    }

    return { selectedCurrency, handleCurrencyChange }
}