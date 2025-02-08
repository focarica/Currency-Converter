import { useState  } from "react";

export function useCurrency(initialCurrency: string){
    const [ selectedCurrency, setSelectedCurrency ] = useState<string>(initialCurrency)

    const handleCurrencyChange = (currency: string) => {
        setSelectedCurrency(currency)
    }

    return { selectedCurrency, handleCurrencyChange }
}

// handleConvert(10, "USD", "EUR") 
export async function handleConvert(amount: number, baseCurrency: string, targetCurrenncy: string){
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
        method: 'POST',
        body: JSON.stringify({
            amount: amount,
            base: baseCurrency,
            to: targetCurrenncy
        })
    })

    const data = await response.json()
    const body = JSON.parse(data.body)

    return body.convertedAmount
}
