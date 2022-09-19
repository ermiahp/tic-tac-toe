import logo from './logo.svg';
import './App.css';
import TicBoard from './components/TicBoard';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TicBoard/>
        <Leaderboard/>
      </header>
    </div>
  );
}

export default App;
