import React from 'react';
import ClientCard from '../../../components/client/ClientCard';
import ClientRoutes from './ClientRoutes';

function Client() {
    return (
        <div className="d-flex gap-3">
            <ClientCard />
            <ClientRoutes />
        </div>
    );
}




export default Client;