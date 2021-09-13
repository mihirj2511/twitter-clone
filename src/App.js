import './App.css';
import { Feed } from './Components/Feed';
import { Sidebar } from './Components/Sidebar';
import { Widget } from './Components/Widget';

function App() {
  return (
    <div className="App">
      <Sidebar/>

      <Feed/>

      <Widget/>
    </div>
  );
}

export default App;
