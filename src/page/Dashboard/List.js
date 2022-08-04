import React from 'react'

function List( {employees, handleEdit, handleDelete}) {
  return (
    <div className='contain-table'>
<table className='striped-table'>
      <thead>

        <tr>
          <th>No°</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Salaire</th>
          <th>Date</th>
          <th colSpan={2} className="text-center" >Actions</th>
        </tr>

      </thead>

      

      <tbody>

        

      </tbody>
</table>
    </div>
  )
}

export default List