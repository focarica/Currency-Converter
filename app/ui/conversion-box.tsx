"use client"

import { currencies } from "@/app/lib/constants/currencies";
import useCurrency from "@/app/lib/useCurrency";
import CurrencySelector from "@/app/ui/Currency/currency-selector";
import CurrencyBoxs from "./Currency/currency-boxs";

export default function ConversionBox() {
  const {
    selectedCurrency: selectedBaseCurrency,
    handleCurrencyChange: handleBaseCurrencyChange,
  } = useCurrency('USD');

  const {
    selectedCurrency: selectedTargetCurrency,
    handleCurrencyChange: handleTargetCurrencyChange,
  } = useCurrency('BRL');

  const selectedCurrencyObj = currencies.find(currency => currency.name === selectedBaseCurrency)

  return (
    <div className='relative w-full max-w-screen-2xl min-h-screen max-h-screen p-4 md:p-6 overflow-x-hidden flex justify-center items-center'>
      <div className="flex flex-col lg:flex-row gap-4">
        <CurrencyBoxs>
          <label className='text-sm font-semibold'>Amount</label>
          <span className="flex items-center">
            {selectedCurrencyObj?.symbol}
            <input className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" type="text" defaultValue="1" inputMode="decimal" />
          </span>
        </CurrencyBoxs>
        <CurrencyBoxs>
          <label className="text-sm font-semibold">From</label>
          <div className="flex items-center">
            <CurrencySelector
              selectedCurrency={selectedBaseCurrency}
              onCurrencyChange={handleBaseCurrencyChange}
            />
          </div>
        </CurrencyBoxs>
        <CurrencyBoxs>
          <label className="text-sm font-semibold">To</label>
          <div className="flex items-center">
            <CurrencySelector
              selectedCurrency={selectedTargetCurrency}
              onCurrencyChange={handleTargetCurrencyChange}
            />
          </div>
        </CurrencyBoxs>
      </div>
    </div>
  )
}