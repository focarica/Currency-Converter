"use client"

import { currencies } from "@/app/lib/constants/currencies";
import useCurrency from "@/app/lib/useCurrency";
import CurrencySelector from "@/app/ui/Currency/CurrencySelector";

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
    <>
      <div className='relative grid grid-cols-3 grid-rows-1'>
        <div>
          <label className='text-sm '>Amount</label>
          <span>
            {selectedCurrencyObj?.symbol}
            <input type="text" value="1" inputMode="decimal" />
          </span>
        </div>
        <div>
          <label className="text-sm">
            From:
            <CurrencySelector 
              selectedCurrency={selectedBaseCurrency}
              onCurrencyChange={handleBaseCurrencyChange}
            />
          </label>
        </div>
        <div>
          <label className="text-sm">
            To:
            <CurrencySelector
              selectedCurrency={selectedTargetCurrency}
              onCurrencyChange={handleTargetCurrencyChange}
            />
          </label>
        </div>
      </div>
    </>
  )
}