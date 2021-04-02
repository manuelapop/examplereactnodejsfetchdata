import logo from './logo.svg';
import './App.css';
import  MainPage  from './components/MainPage';
import { Container} from 'semantic-ui-react';

function App() {
  return (
    <Container>
    <div className="App">
      <header className="App-header">
        Sports Mascots
      </header>
      <MainPage/>
    </div>
    </Container>
  );
}

export default App;
