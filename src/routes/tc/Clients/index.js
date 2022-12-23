import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Clients from './Clients';
import Client from './Client';

function ClientsScreen(){
    return(
        <Routes>
            <Route path='/' element={<Clients/>} exact/>
            <Route path=':client/*' element={<Client/>}/>
        </Routes>
    )
}
export default ClientsScreen;