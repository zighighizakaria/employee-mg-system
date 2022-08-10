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
          <th>Salaire (MAD)</th>
          <th>Date</th>
          <th colSpan={2} className="text-center" >Actions</th>
        </tr>

      </thead>

      <tbody>

      {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.prenom}</td>
                                <td>{employee.nom}</td>
                                <td>{employee.email}</td>
                                <td>{employee.salaire}</td>
                                <td>{employee.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted_edit-button"
                                    >
                                        Éditer
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted_delete-button"
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}

        

      </tbody>
</table>
    </div>
  )
}

export default List