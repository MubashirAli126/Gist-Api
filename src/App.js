
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import Gist from './components/Gist';

const App = () => {
  return (
    <Wrapper className="App" data-testid="app">
      <Header />
      <Gist />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
