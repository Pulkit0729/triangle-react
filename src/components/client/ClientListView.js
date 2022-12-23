import classes from './Client.module.css';
import ClientTag from './ClientTag';
import {Link} from 'react-router-dom';
function ClientListView({client, even}) {
    return (
        <Link to="./client">
        <div className={`${classes.client } ${even ? classes.even:null}`}>
            <div className="d-flex">
                <img src="../../images/prof.jpg" />
                <div className="d-flex flex-column justify-content-center">
                    <span className={classes.clientName}>{client.name}</span>
                    <span className={classes.email}>{client.email}</span>
                </div>
            </div>
            <div className="d-flex gap-2">
                <ClientTag>Accounting</ClientTag>
                <ClientTag>VIP</ClientTag>
                
            </div>
            <div className="d-flex">
                <span className={classes.assigned}>{client.assignedTo}</span>
            </div>
            <div className="d-flex">
                ...
            </div>
        </div>
        </Link>
    );
}
export default ClientListView;