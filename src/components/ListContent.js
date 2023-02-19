import React from 'react'
import { useState } from 'react'
import { InternData } from './InternData'


export default function ListContent(sortClick) {
    const [data] = useState(InternData)
 
    const sorted = [...data].sort((a,b)=>{return b.powerRanking - a.powerRanking})
  return (
    
    <>
        {
            sorted.map((data, index)=> (
              <tbody key={index}>
                <tr>
                  <td>{data.no}</td>
                  <td>
                    <div className='namePic'>
                      <img src={data.avatar} className='intern-avatar' alt="Onah Sochima"/> <span>{data.name}</span>
                    </div>
                  </td>
                  <td>{data.attendance}</td>
                  <td>{data.bonus}</td>
                  <td className='striked'>{data.strike}</td>
                  <td>{data.powerRanking}</td>
                </tr>
              </tbody>
            ))
          }
    </>
  )
}
