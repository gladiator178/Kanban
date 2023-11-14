import './App.css';
import Navbar from './Components/Navbar/navbar';
import KBoard from './Components/Board/board';
import KCard from './Components/Ticket/ticket';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <KBoard/>
        <KCard/>  
      </header>
    </div>
  );
}

export default App;
