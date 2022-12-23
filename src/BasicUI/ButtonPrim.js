
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColorWithPrimBg};
    border-radius: 40px;
    font-size: 1rem;
    display:inline-flex;
    align-items: center;
`;
function PrimButton({children, className}){
    return(
        <Button className={`btn ${className}`}>{children}</Button>
    )
}

export default PrimButton;