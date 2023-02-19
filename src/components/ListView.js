import React from 'react'
import ListContent from './ListContent'

export default function ListView() {
  
  return (
    <div>
      <section className='list-view'>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>Name</td>
              <td>Attendance</td>
              <td>Bonus</td>
              <td>Strike</td>
              <td>Power Ranking</td>
            </tr>
          </thead>
          <ListContent/>
        </table>
      </section>
    </div>
  )
}
