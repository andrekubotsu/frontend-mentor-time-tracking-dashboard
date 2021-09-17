import { Reset } from 'styled-reset';
import GlobaStyles from './global/style'
import Main from './containers/Main';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobaStyles />
      <Main />
    </ThemeProvider>
  );
}

export default App;
