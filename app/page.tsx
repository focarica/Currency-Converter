import ConversionBox from '@/app/ui/conversion-box'

export default function Page() {
  return (
    <div className='bg-[#f2f9f1]'>
      <h1 className='p-5 text-xl text-bold-[#b6cdbd]'>Currency Converter</h1>
      <div className='flex justify-center items-center h-screen'>
        <ConversionBox />
      </div>
    </div>
  );
};