import React from 'react';
import './SingleProject.css';


function SingleProject({ item }) {
  return (
    <div className='box'>
      <div>
        <img src={item.imageurl} height={183} alt={item.name} />
      </div>
      <div className='progres'>

      </div>
      <div className='impression'>{item.name}</div>
    </div>
  );
}

export default SingleProject;

