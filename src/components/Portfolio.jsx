import React, { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import files from '../utils';

export default function Portfolio() {
    console.log('files',files.length)
    const [state, setState]= useState('All')
    
    const arr= files.filter(function(item){
        if (state==='All'){
            return true
        }
        else{

            return item.category===state
        }
        
        })
  return (
    <div>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={state}
        onSelectFilter={setState}
        />
        {/* передаем отфильтроанный список */}
    <ProjectList files={arr}/>
    </div>
  );
}
