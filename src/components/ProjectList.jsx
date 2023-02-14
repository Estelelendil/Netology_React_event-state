import React from 'react';
import '../App.css';

export default function ProjectList({files}) {
  return (
    <div className='flex'>
      {files.map(element=>{
        return(<img className='img' src={element.img} alt={element.category}></img>)
      })}
    </div>
  );
}
