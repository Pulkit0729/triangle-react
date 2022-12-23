import classes from './Client.module.css';

function ClientTag({ children }) {
    return (
        <div className={classes.clientTag}>
            <span>{children}</span>
        </div>
    );
}

export default ClientTag;