import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import addlogo from '../../pictures/add.png'

function Add({ employees, setEmployees, setIsAdding }) {

    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [salaire, setSalaire] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!prenom || !nom || !email || !salaire || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Erreur!',
                text: 'Tous les champs sont requis.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            prenom,
            nom,
            email,
            salaire,
            date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${prenom} ${nom} a été ajouté.`,
            showConfirmButton: false,
            timer: 1900
        });
    }


    return (
        
        <div className="small-container">
        <div className='header_for_add'> 
            <h1 id="titreajout">Ajouter Un Employé</h1>
            <img id='addlogo' src={addlogo} alt='addlogo'></img>
            </div> 
            <div className='forform'>
            <form onSubmit={handleAdd} action="src\data\index.js" method="get">
                <label htmlFor="prenom">Prénom</label>
                <input
                    id="prenom"
                    type="text"
                    ref={textInput}
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
                <label htmlFor="salaire">Salaire (MAD)</label>
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
                <div className='twobtn' style={{ marginTop: '30px' }}>
                    <input type="submit" 
                        value="Ajouter" 
                        className="muted_edit-button"
                    />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted_delete-button"
                        type="button"
                        value="Annuler"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
            </div>
        </div>
    );
}

export default Add