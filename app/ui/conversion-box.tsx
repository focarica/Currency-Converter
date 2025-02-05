import { handleConvert } from "@/app/lib/fetcher";

export default function ConversionBox(){
    return (
        <>
        <div>
          <label>
            Amount:
            <input type="number" value="1"/>
          </label>
        </div>
        <div>
          <label>
            From:
            <select value="USD">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BRL">BRL</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            To:
            <select value="BRL">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BRL">BRL</option>
            </select>
          </label>
        </div>
      </>
    )
}