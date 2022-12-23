import styled from 'styled-components';
import MainWrapper from '../../../components/MainWrapper';
import SearchBar from '../../../BasicUI/Search';
import DocumentsList from '../../../logic/data/DocumentsList';
import DocumentListView from '../../../components/client/DocumentLIstView';
import {ReactComponent as Upload} from '../../../svg/upload.svg';
import {ReactComponent as AddFolder} from '../../../svg/addFolder.svg';
import {ReactComponent as Dots} from '../../../svg/dots.svg';

const SearchBarExt = styled(SearchBar)`
background-color:#F6F6F6 !important;
border-radius:0;
box-shadow:none !important;
padding: 3px 16px;`
    ;

const HeadBar = styled.div`
display:flex;
justify-content: space-between;
padding: 0.5rem 1rem;
border-bottom: 1px solid #dee2e6!important;
color:#717171;
text-transform: uppercase;
font-size:0.85rem;
font-family: Raleway;`

function Documents() {
    return (
        <MainWrapper className="w-100 px-0">
            <div className="d-flex justify-content-between px-2 pb-2">
                <span className="fw-bold">Documents</span>
                <div className="d-flex align-items-center gap-2">
                    <button>
                        <Upload width={19}/>
                        <span>Upload</span>
                    </button>
                    <AddFolder/>
                    <Dots/>
                </div>

            </div>
            <SearchBarExt />
            <HeadBar>
                <span>Name</span>
                <span>Created By</span>
                <span>Created On</span>
                <span />
            </HeadBar>
            <div>
                {DocumentsList.map(document => {
                    return <DocumentListView document={document} />
                })}
            </div>
        </MainWrapper>
    );
}

export default Documents;