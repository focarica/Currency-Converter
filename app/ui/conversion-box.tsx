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
    <div className='relative w-full max-w-screen-2xl p-4 md:p-6 overflow-x-hidden'>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
        <CurrencyBoxs>
          <label className='text-sm'>Amount</label>
          <span className="flex items-center">
            {selectedCurrencyObj?.symbol}
            <input className="pl-2" type="text" defaultValue="1" inputMode="decimal" />
          </span>
        </CurrencyBoxs>
        <CurrencyBoxs>
          <label className="text-sm">From</label>
          <div className="flex items-center">
            <CurrencySelector
              selectedCurrency={selectedBaseCurrency}
              onCurrencyChange={handleBaseCurrencyChange}
            />
          </div>
        </CurrencyBoxs>
        <CurrencyBoxs>
          <label className="text-sm">To</label>
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