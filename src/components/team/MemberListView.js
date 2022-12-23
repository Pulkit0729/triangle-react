import classes from './Client.module.css';
function MemberListView({teamMember, even}) {
    return (
        <div className={`${classes.client } ${even ? classes.even:null}`}>
            <div className="d-flex">
                <img src="../../images/prof.jpg" />
                <div className="d-flex flex-column justify-content-center">
                    <span className={classes.clientName}>{teamMember.name}</span>
                    <span className={classes.email}>{teamMember.email}</span>
                </div>
            </div>
            <div className="d-flex gap-2">
            {teamMember.phone}
            </div>
            <div className="d-flex">
                <span className={classes.assigned}>{teamMember.location}</span>
            </div>
            <div className="d-flex">
                ...
            </div>
        </div>
    );
}
export default MemberListView;