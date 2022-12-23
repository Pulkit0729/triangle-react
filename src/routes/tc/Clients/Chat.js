import MainWrapper from '../../../components/MainWrapper';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import styled from 'styled-components';
import { ReactComponent as AttachLogo } from '../../../svg/attach.svg';
import { ReactComponent as SendLogo } from '../../../svg/send.svg';

const MainWrapperExtended = styled(MainWrapper)`
padding:0 0 0 0;
width: 100%;
background-color:#ECF0F3;
max-height:82vh;
`;

const PurpleBar = styled.div`
display:flex;
justify-content: space-between;
padding: 1rem;
background-color:#FFEBFD;`

const ChatBubble = styled.div`
padding: 1rem;
display:flex;
align-items: center;
gap: 0.5rem;
    img{
        border-radius:100%;
        width:50px;
    }
    span{
        margin-top:20px;
        background-color:#fff;
        padding:0.25rem 0.5rem;
        border-radius: 0 10px 10px 10px;
    }
`
function Chat() {
    return (
        <MainWrapperExtended>
            <PurpleBar>
                <span className="fw-bold">Mark Zuckerberg</span>
                <div className="d-flex align-items-center gap-2">
                    <SearchRoundedIcon />
                    <MoreVertRoundedIcon />
                </div>
            </PurpleBar>
            <div className="d-flex flex-column overflow-auto ">
                <ChatBubble>
                    <img src='../../../../images/prof.jpg'/>
                    <span>Hello</span>
                </ChatBubble>
                <span className="p-3">Hello</span>
                <span className="p-3">Hello</span>
                <span className="p-3">Hello</span>
                <span className="p-3">Hello</span>
                <span className="p-3">Hello</span>
                <span className="p-3">Hello</span>
                <span className="p-3">Hello</span>
                <span className="p-3">Hello</span>
            </div>
            <PurpleBar className="py-1">
                <button>
                    <AttachLogo />
                </button>
                <input className="w-100 border-0" placeholder="Message"></input>
                <button>
                    <SendLogo />
                </button>
            </PurpleBar>
        </MainWrapperExtended>
    );
}

export default Chat;