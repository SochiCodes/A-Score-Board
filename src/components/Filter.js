import React from 'react'
import { useState} from 'react'

import GridView from './GridView'
import ListView from './ListView'
import ListContent from './ListContent'



export default function Filter(props) {
  const [view, setView] = useState(false)
  return (
    <div>
      <section className='filter-section'>
        <div className='info-title'>
          <p>Last Updated: </p> <span className='date'>17 Feb 2023</span>
        </div>
        <div className='view-container'>
            {
              view === true? (
                <>
                  <div className='view-wrapper'onClick={()=>setView(false)}>
                    <img src="/img/list.png" alt="grid" className='filter-icon'/>
                  </div>
                </>
              ) : (
                <>
                  <div className='view-wrapper' onClick={() => setView(true)}>
                    <img src="/img/grid.png" alt="list" className='filter-icon'/>
                  </div>
                </>
              )
            } 
        </div>
        <div className='sort-wrapper' onClick={props}>
            <img src="/img/sort.png" alt="sort" className='filter-icon'/>
        </div>
      </section>
      {
        view === true ? 
          <>
            <GridView/>
          </> : 
          <>
            <ListView/>
          </>
      }
    </div>
  )
}
