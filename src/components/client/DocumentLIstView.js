import { ReactComponent as Folder } from '../../svg/folder.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DocName = styled.div`
display:flex;
gap:1rem;
font-size:0.9rem;
`;

const CreatedBy = styled.div`
display:flex;
font-size:0.85rem;
color:#757575;
`
const CreatedOn = styled.div`
display:flex;
font-size:0.85rem;
color:#757575;
`
function DocumentListView({ document }) {
    return (
        <Link to="./document">
            <div className='d-flex justify-content-between border-bottom px-3 py-2 border-1 fs-6 align-items-end'>
                <DocName>
                    <Folder width={20} />
                    <span >{document.name}</span>
                </DocName>
                <CreatedBy>
                    {document.createdBy}
                </CreatedBy>
                <CreatedBy>
                    {document.createdOn}
                </CreatedBy>
                <div className="d-flex">
                    ...
                </div>
            </div>
        </Link>
    );
}
export default DocumentListView;