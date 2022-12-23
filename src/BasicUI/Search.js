import styled from 'styled-components';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchWrapper = styled.div`
    background-color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 7px;
    box-shadow: 0px 4px 4px #00000014;
    width: -webkit-fill-available;
    color: #b8b8b8;
     input{
        font-size: 0.8rem;
     }
}
    `;

function SearchBar({className}) {
    return (
        <SearchWrapper className={className}>
            <SearchRoundedIcon  />
            <input type="text" placeholder="Search" />
        </SearchWrapper>
    )
}
export default SearchBar;