import React, { useState} from 'react'
import Swal from 'sweetalert2';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';


import { employeesData} from '../../data';

function Dashboard() {

  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding ] = useState(false);
  const [isEditing, setIsEditing ] = useState(false);

  const handleEdit = (id) => {
      const [employee] = employees.filter(employee => employee.id === id);

      setSelectedEmployee(employee);
      setIsEditing(true);
  }

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le !',
      cancelButtonText: 'Non, annulez!',
  }).then(result => {
      if (result.value) {
          const [employee] = employees.filter(employee => employee.id === id);

          Swal.fire({
              icon: 'success',
              title: 'Supprimé!',
              text: `${employee.prenom} ${employee.nom} a été supprimé.`,
              showConfirmButton: false,
              timer: 1900,
          });

          setEmployees(employees.filter(employee => employee.id !== id));
      }
   });
}

  return (
    <div className='container'>

            {/*List*/}
          {!isAdding && !isEditing &&(
            <>
            <Header
            setIsAdding = {setIsAdding}
            />
            <h5 style={{marginTop: "20px"}}>La Liste Des Employés</h5>
            <List 
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />
            </>
          )}


             {/*Add*/}
          {isAdding && (
            <Add
              employees={employees}
              setEmployees={setEmployees}
              setIsAdding={setIsAdding}
              />
          )}

           {/*Edit*/}

           {isEditing && (
            <Edit
              employees={employees}
              selectedEmployee={selectedEmployee}
              setEmployees={setEmployees}
              setIsEditing={setIsEditing}
              />
          )}
    
    </div>
  )
}

export default Dashboard;