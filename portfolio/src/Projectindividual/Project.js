import React from 'react'
import './Project.css'
function Project({item}) {
  return (
    <>
      <div className="projectone custom-shadow  m-3 ">
        <div className="projectimage mt-2">
                <img src={item.imageurl} className='rounded' onClick={()=>{
                    window.open(item.live,"_blank")
                }} alt="" />
        </div>
        <div className="projectcontent p-2">
            <div className="projecttitle text-center text-white py-2">
                <h3>{item.name}</h3>
            </div>
            <div className="projectoveriew m-auto">
                {item.overview}
            </div>
        </div>

      </div>
    </>
  )
}

export default Project
