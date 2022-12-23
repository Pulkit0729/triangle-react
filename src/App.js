import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './routes/tc/Home';
import { GlobalStyles } from './style/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Navigate replace to="/tc" />} />
            <Route path="tc/*" element={<Home />} />
          </Routes >
        </BrowserRouter >
    </ThemeProvider>

  );
}
//  make sure to put a * at the end of the parent route's path. Otherwise, the parent route won't match the URL when it is longer than the parent route's path, and your descendant <Routes> won't ever show up.
export default App;
