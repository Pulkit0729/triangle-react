import { createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

html, body {
  padding: 30px 0 0;
  margin: 0;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,  Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-x: hidden;
}

button {
  outline: none!important;
  border: none;
  background: 0 0;
}

ul, ol{
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

p{
  margin: 0
}
* {
  box-sizing: border-box;
}

input{
        border:none;
        background: transparent;
     }
    
input:focus-visible{
    outline:none;}

.row{
  margin: 0;
}

a:hover{
  color: inherit;
}

::-webkit-scrollbar{
  width: 5px;
  /* background-color: green; */
  
}
::-webkit-scrollbar-thumb{
  background-color: purple;
}

`