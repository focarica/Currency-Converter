import { currencies } from "@/app/lib/constants/currencies"
import { useState } from "react"

interface CurrencySelectorProps {
  selectedCurrency: string,
  onCurrencyChange: (currency: string) => void
}

export default function CurrencySelector({ selectedCurrency, onCurrencyChange }: CurrencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("")

  const filteredCurrencies = currencies.filter((currency) =>
    currency.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => {
          setIsOpen(!isOpen)
          setSearch("")
        }}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search currency" />

      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
        {filteredCurrencies.map((currency) => (
          <div
            key={currency.name}
            onClick={() => {
              onCurrencyChange(currency.name)
              setSearch(`${currency.flag} ${currency.name} - ${currency.fullName}`)
            }}
            className={`p-2 cursor-pointer hover:bg-gray-100 $(
              selectedCurrency === currency.name ? "bg-blue-100" : ""
            )`}
          >
            {currency.flag} {currency.name} - {currency.fullName}
          </div>
        ))}
      </div>
    </div>
  )
}


/*
        <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
            {currencies.map((currency) => (
                <option key={currency.name} value={currency.name}>
                   {currency.flag} {currency.name} - {currency.fullName}
                </option>
            ))}
        </select>
*/