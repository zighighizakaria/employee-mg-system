import React from 'react'
import employee from './logoo.png'
function Header({ setIsAdding }) {
    return (
        <header>
        <div>
            <div >
            <img src={employee} alt='logo'></img>
            <h1 style={{color:"#042454"}}> EMPLOYEE MGMT</h1>
            </div>
                <div style={{ marginTop: '60px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Ajouter</button>
                </div>
        </div>
        </header>
    )
}

export default Header