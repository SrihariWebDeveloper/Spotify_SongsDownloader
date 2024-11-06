import React from 'react'

const Reasult = ({image,link,album,artist}) => {
  return (
    <div className="text-center pt-2 overflow-hidden">
      <div className="pt-5 w-25 h-25 relative left-[40%] max-sm:pl-14 max-sm:left-0">
        <img src={image} alt="" className="shadow-2xl"/>
      </div>
      <div className="pt-4">
        <h1>{album}</h1>
        <p>{artist}</p>
      </div>
      <div className="bg-blue-400 mr-[45%] ml-[45%] p-2 rounded-md max-sm:mr-[38%] max-sm:ml-[38%] mt-4">
        <a type="submit" href={link} download className="bg-blue-400 h-[80px] w-[100px] text-zinc-50 rounded">
          Download</a>
      </div>
    </div>
  )
}

export default Reasult