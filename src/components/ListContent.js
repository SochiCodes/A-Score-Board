import React from 'react'
import { useState } from 'react'
import { InternData } from './InternData'


export default function ListContent(sortClick) {
    const [list] = useState(InternData)
 
    const sorted = [...list].sort((a,b)=>{return b.powerRanking - a.powerRanking})
  return (
    
    <>
        {
            sorted.map((list, index)=> (
              <tbody key={index}>
                <tr>
                  <td>{list.no}</td>
                  <td>
                    <div className='namePic'>
                      <img src={list.avatar} className='intern-avatar' alt="Onah Sochima"/> <span>{list.name}</span>
                    </div>
                  </td>
                  <td>{list.attendance}</td>
                  <td>{list.bonus}</td>
                  <td className='striked'>{list.strike}</td>
                  <td>{list.powerRanking}</td>
                </tr>
              </tbody>
            ))
          }
    </>
  )
}
