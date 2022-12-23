import React from 'react';
import styled from 'styled-components';
import MainWrapper from '../MainWrapper';
import { Link } from 'react-router-dom';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { ReactComponent as Mail } from '../../svg/mail.svg';
import { ReactComponent as Chat } from '../../svg/chat.svg';
import { ReactComponent as Whatsapp } from '../../svg/whatsapp.svg';



const ContactWrapper = styled.div`
display: flex;
gap: 1rem;
 svg{
    color:${props => props.theme.primaryLightColor2};
    width:16px;}
span{
    color:${props => props.theme.lightTextColor};
    font-size: 0.75rem;
}
`;

const MainWrapperExtended = styled(MainWrapper)`
padding-left:0;
padding-right:0;
min-width: 30%;
`;


function ClientCard() {
    return (
        <MainWrapperExtended>
            <div className="mb-3 px-3">
                <div className="d-flex flex-column gap-1 align-items-center mb-3">
                    <img src="../../../images/prof.jpg" width={100} />
                    <span>Marc Zuckerberg</span>
                </div>
                <ContactWrapper>
                    <EmailRoundedIcon />
                    <span>marc@facebook.com</span>
                </ContactWrapper>
                <ContactWrapper>
                    <CallRoundedIcon />
                    <span>+1098932039</span>
                </ContactWrapper>

            </div>
            <div className='d-flex justify-content-evenly py-1 border-bottom border-1'>
                <Link to='whatsapp'>
                    <Whatsapp />
                </Link>
                <Link to='mail'>
                    <Mail />
                </Link>
                <Link to='chat'>
                    <Chat />
                </Link>
            </div>
            <div className="d-flex flex-column">
                <ClientTagOption title="Inbox" to="inbox" />
                <ClientTagOption title="Documents" to="documents" />
                <ClientTagOption title="Invoices" to="invoices" />
                <ClientTagOption title="Details" to="details" />
            </div>
        </MainWrapperExtended>
    );
}
const ClientTagOptionStyled = styled.div`
display:flex;
justify-content:space-between;
border-bottom: 1px solid #dee2e6!important;
padding:1rem;
font-weight:600;
color:#595959;
font-size: 0.75rem;
`

function ClientTagOption({ title, to }) {
    return (
        <Link to={to}>
            <ClientTagOptionStyled>
                <span>{title}</span>
                <span>{">"}</span>
            </ClientTagOptionStyled>
        </Link>
    );
}

export default ClientCard;