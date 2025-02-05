import ConversionBox from '@/app/ui/conversion-box'

export default function Page(){
    return (
      <>
      <h1 className='text-xl text-green-500'>Currency Converter</h1>
      <div className='flex justify-center items-center h-screen'>
        <ConversionBox/>
      </div>
      </>
    );
  };