import React from 'react';
import styled from 'styled-components';
import PrimButton from '../../BasicUI/ButtonPrim';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import SearchBar from '../../BasicUI/Search';
import MainWrapper from '../../components/MainWrapper';
import MemberList from '../../logic/data/MemberList';
import MemberListView from '../../components/team/MemberListView';
import classes from './ClientsAndTeam.module.css';


const WhitePrimButton = styled(PrimButton)`
background-color: white;
color: black;
box-shadow:0px 4px 4px #00000014;
`;

function Team() {
    var count = 0;
    return (
        <React.Fragment>
            <div className="d-flex align-items-center justify-content-between my-3 gap-2">
                <SearchBar />
                <di className="d-flex gap-2">
                    <WhitePrimButton>
                        <AddRoundedIcon />
                        <span>Invite</span>
                    </WhitePrimButton>
                    <WhitePrimButton>
                        <AddRoundedIcon />
                        <span>Export</span>
                    </WhitePrimButton>
                    <WhitePrimButton>
                        <AddRoundedIcon />
                        <span>Fliter</span>
                    </WhitePrimButton>
                </di>
            </div>
            
            <MainWrapper>
                <div className="d-flex justify-content-between ">
                    <span>Name</span>
                    <span>Contact</span>
                    <span>Location</span>
                    <span />
                </div>
                <hr />
                <div>
                    {MemberList.map(member => {
                        count++;
                        return <MemberListView teamMember={member} even={count % 2} />
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

export default Team;