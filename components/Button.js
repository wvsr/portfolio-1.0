export default function Button({ children }) {
  return (
    // <button className='py-2 px-3 bg-indigo-600 text-center text-white outline-none capitalize font-medium border-2 border-black text-lg'>
    //   {children}
    // </button>
    <button className='button-animate relative px-5 py-2 text-lg border-2 rounded-md border-black hover:text-white overflow-hidden capitalize'>
      {children}
      <div className='button-blobs h-full overflow-hidden absolute top-0 left-0 bottom-[-3px] right-[-1px] -z-10 '>
        <div className='left-[-5%] bg-indigo-600'></div>
        <div className='left-[30%] delay-[60ms] bg-indigo-600'></div>
        <div className='left-[66%] delay-[25ms] bg-indigo-600'></div>
      </div>
    </button>
  )
}
