import React from 'react'
import { useState } from 'react' 

import { InternData } from './InternData'

export default function GridView() {
  const [data] = useState(InternData)

  return (
    <div>
      <section className='grid-view'>
        <div className='card-row'>
            {
            data.map((data, index)=>(
                <div key={index} className="card">
                    <div className='profile'>
                        <img src={data.avatar} className='intern-avatar' alt="name" />
                        <div className='stat'>
                            <p><span className='greyed'>No. <br/></span>{data.no}</p>
                            <p className='striked'><span className='greyed'>Strike <br/></span>{data.strike}</p>
                        </div>
                    </div>
                    
                    <div className='details'>
                        <h1>{data.name} </h1>
                        <p><span className='greyed'>Bonus: </span>{data.bonus}</p>
                        <p><span className='greyed'>Attendance: </span>{data.attendance}</p>
                        <p><span className='greyed'>Power Ranking: </span>{data.powerRanking}</p>
                    </div>
                </div>
            ))
            }
            
        </div>
      </section>
    </div>
  )
}
