import React from 'react';
import ClientListView from '../../../components/client/ClientListView'
import { ClientList } from '../../../logic/data/ClientList';
import classes from '../ClientsAndTeam.module.css';
import PrimButton from '../../../BasicUI/ButtonPrim';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import SearchBar from '../../../BasicUI/Search';
import MainWrapper from '../../../components/MainWrapper';

function Clients() {
    var count = 0;
    return (
        <React.Fragment>
            <div className="d-flex align-items-center justify-content-between my-3">
                <SearchBar/>
                <div className="d-flex gap-2">
                <PrimButton>
                    <AddRoundedIcon />
                    <span>Add Client</span>
                </PrimButton>
                <FilterAltRoundedIcon />
                </div>
            </div>

            <MainWrapper>
                <div className="d-flex justify-content-between ">
                    <span>Name</span>
                    <span>Tags</span>
                    <span>Assigned To</span>
                    <span />
                </div>
                <hr />
                <div>
                    {ClientList.map(client => {
                        count++;
                        return <ClientListView client={client} even={count%2} />
                    })}
                </div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                    <div className={classes.bottom1}>
                        <span>Rows per page</span>
                        <span>10 </span>
                        <span>out of 80</span>
                    </div>
                    <div className={classes.bottom2}>

                        <span>{"<"}</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>{">"}</span>
                    </div>
                </div>
            </MainWrapper>
        </React.Fragment>
    )
}
export default Clients;