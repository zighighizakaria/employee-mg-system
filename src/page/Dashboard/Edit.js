import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [prenom, setPrenom] = useState(selectedEmployee.prenom);
    const [nom, setNom] = useState(selectedEmployee.nom);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salaire, setSalaire] = useState(selectedEmployee.salaire);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!prenom || !nom || !email || !salaire || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Erreur!',
                text: 'Tous les champs sont requis.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            prenom,
            nom,
            email,
            salaire,
            date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Mis à jour!',
            text: `${employee.prenom} ${employee.nom} a été mis à jour.`,
            showConfirmButton: false,
            timer: 1900
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="prenom">Prénom</label>
                <input
                    id="prenom"
                    type="text"
                    name="prenom"
                    value={prenom}
                    onChange={e => setPrenom(e.target.value)}
                />
                <label htmlFor="nom">Nom</label>
                <input
                    id="nom"
                    type="text"
                    name="nom"
                    value={nom}
                    onChange={e => setNom(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="salaire">salaire (MAD)</label>
                <input
                    id="salaire"
                    type="number"
                    name="salaire"
                    value={salaire}
                    onChange={e => setSalaire(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" 
                    value="Mettre à jour" 
                    className='muted_edit-button'
                    />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted_delete-button"
                        type="button"
                        value="Annuler"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit