import ConversionBox from '@/app/ui/conversion-box'
import ConversionArea from './ui/Conversion/conversion-area';

export default function Page() {
  return (
    <div className='grid bg-[#f2f9f1]'>
      <h1 className='p-5 text-xl text-bold-[#b6cdbd]'>Currency Converter</h1>
      <div className='flex flex-col justify-center items-center'>
        <ConversionBox />
      </div>
      <ConversionArea/>
    </div>
  );
};