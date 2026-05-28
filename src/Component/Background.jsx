import React from 'react'

function Background() {
  return (
    <>
    <div className= 'absolute z-2 w-full h-screen' >
      <div className= "absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold">Document</div>
      <div className="text-zinc-800 text-[12vw] absolute top-1/2 left-1/2 font-semibold -translate-x-1/2 -translate-y-1/2 leading-none tracking-tighter">
        Docs.
    </div>
    </div>
    </>
  )
}

export default Background