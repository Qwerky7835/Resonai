import './App.css';
import Daily from './components/daily.js'
import Personal from './components/personal.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Daily />
        <Personal />
      </header>
    </div>
  );
}

export default App;
