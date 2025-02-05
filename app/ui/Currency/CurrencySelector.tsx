import { currencies } from "@/app/lib/constants/currencies"

interface CurrencySelectorProps {
    selectedCurrency: string,
    onCurrencyChange: (currency: string) => void
}

export default function({ selectedCurrency, onCurrencyChange }: CurrencySelectorProps){
    return (
        <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
            {currencies.map((currency) => (
                <option key={currency.name} value={currency.name}>
                    {currency.name}
                </option>
            ))}
        </select>
    )
}