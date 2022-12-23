import React from 'react';
import WorkCard from '../../logic/modals/WorkCard';
import PrimButton from '../../BasicUI/ButtonPrim';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import classes from './WorkSchedule.module.css';
function WorkSchedule() {
    return (
        <React.Fragment>
            <div className="my-2">
                <ul className="d-flex align-items-center">
                    <li className="ms-3">
                        <PrimButton>
                            <AddRoundedIcon />
                            <span>Add Work</span>
                        </PrimButton>
                    </li>
                    <li className="ms-3">
                        <PrimButton>
                            <AddRoundedIcon />
                            <span>New List</span>
                        </PrimButton>
                    </li>
                    <li className="ms-3">
                        <FilterAltRoundedIcon />
                    </li>
                    <li className={classes.workCount}>
                        <WorkRoundedIcon />
                        <span>20 Work Item</span>
                    </li>
                </ul>
            </div>
            <div className={classes.listsWrapper}>
                <WorkList title='To Do'/>
                <WorkList title='In Review' />
                <WorkList title='In Progress' />
                <WorkList title='Completed' />
            </div>
        </React.Fragment>
    )
}

function WorkList({title}) {
    return (
        <div className={classes.workList}>
            <div className={classes.title}>{title}</div>
            <WorkCardView workCard={new WorkCard('GST Filing', '2/02/01', 'Working on finishing up the tickets for the bigger project files.', 'Ketan Garg')}/>
        </div>
    )
}

function WorkCardView({workCard}) {

    return (
        <div className={classes.workCard}>
            <hr width={40} height={5} />
            <div className='d-flex align-items-center'>
                <span className={classes.cardTitle}>{workCard.title}</span>
                <span className={classes.date}>{workCard.date}</span>
            </div>
            <span className={classes.workSummary}>{workCard.summary}</span>
            <div className='d-flex align-items-center'>
            <span className={classes.name}>{workCard.author}</span>
            <img src='../../images/prof.jpg' width={40} className='ms-auto'/>
            </div>
        </div>
    )
}


export default WorkSchedule;