import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import './App.css';

export const UserList = () => {
    /* Utiliser les crochets UseState pour enregistrer les données dans l'état listOfUSer */
    const [listOfUSer, setListOfUSer] = useState([]);
    
    useEffect(() => {
      /* Récupérer les utilisateurs depuis l'API */
      const getListUsers = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setListOfUSer(response.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des utilisateurs:', error);
        }
      };
  
      getListUsers();
    }, []);
  return (
    <>
     <div className="container mt-5">
      <h1 className="text-center mb-4">Liste des Utilisateurs</h1>
    <Table className='table usertable usertable-center'>
      <thead>
        <tr>        
            <th scope="col">Id</th>
            <th scope="col">Nom</th>
            <th scope="col">Emai</th>
            <th scope="col">Adresse</th>
            <th scope="col">Téléphone</th>
        </tr>
      </thead>
      <tbody>
         {listOfUSer.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        
      </tbody>
     
    </Table>
    </div>
    </>
    
  )
}

export default UserList;