import MainWrapper from '../../../components/MainWrapper';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import EditorContainer from '../../../components/EditorContainer';
import PrimButton from '../../../BasicUI/ButtonPrim';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
const MainWrapperExtended = styled(MainWrapper)`
padding:0;
width: fit-content;
height:fit-content;
`;

const PurpleBar = styled.div`
display:flex;
gap: 1rem;
padding: 1rem;
background-color:#FFEBFD;`

const Input = styled.div`
display:flex;
align-items: center;
gap: 1rem;
font-family:Raleway;
border-bottom:1px solid #dee2e6!important;
margin:0 1rem 0.5rem;
padding:2px 0;
color:#6F6F6F;
 span{
     width:30px;
 }
`;


function Mail() {
    return (
        <MainWrapperExtended>
            <PurpleBar>
                <KeyboardBackspaceOutlinedIcon />
                <span className="fw-bold">New Message</span>
            </PurpleBar>
            <Input>
                <span>From</span>
                <input value={'peter@parker.com'}></input>
            </Input>
            <Input>
                <span>To</span>
                <input value={'mark@facebook.com'}></input>
            </Input>
            <Input>
                <span>Cc</span>
                <input></input>
            </Input>
            <Input>
                <input placeholder="Subject"></input>
            </Input>
            <div className="px-3">
                <EditorContainer />
            </div>
            <div className="px-3 py-2">
                <PrimButton className="py-1">
                    <SendRoundedIcon/>
                    <span>Send</span>
                </PrimButton>
            </div>
        </MainWrapperExtended>
    );
}

const EditorComponent = () => <Editor />

export default Mail;