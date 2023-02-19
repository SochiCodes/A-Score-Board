import React from 'react'
import { useState } from 'react' 

import { InternData } from './InternData'

export default function GridView() {
  const [cards] = useState(InternData)

  return (
    <div>
      <section className='grid-view'>
        <div className='card-row'>
            {
            cards.map((card, index)=>(
                <div key={index} className="card">
                    <div className='profile'>
                        <img src={card.avatar} className='intern-avatar' alt="name" />
                        <div className='stat'>
                            <p><span className='greyed'>No. <br/></span>{card.no}</p>
                            <p className='striked'><span className='greyed'>Strike <br/></span>{card.strike}</p>
                        </div>
                    </div>
                    
                    <div className='details'>
                        <h1>Onah Sochima </h1>
                        <p><span className='greyed'>Bonus: </span>{card.bonus}</p>
                        <p><span className='greyed'>Attendance: </span>{card.attendance}</p>
                        <p><span className='greyed'>Power Ranking: </span>{card.powerRanking}</p>
                    </div>
                </div>
            ))
            }
            
        </div>
      </section>
    </div>
  )
}
