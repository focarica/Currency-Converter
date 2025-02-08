import { handleConvert } from "@/app/lib/useCurrency"


export default function ConversionArea({ amount, baseCurrency, targetCurrency}){
    const convertedAmount: Promise<string> = handleConvert(amount, baseCurrency, targetCurrency)

    return (
        <div className="flex flex-col">
            <label className="text-sm">{amount} {baseCurrency}</label>
            <h1>{convertedAmount}</h1>
        </div>
    )
}