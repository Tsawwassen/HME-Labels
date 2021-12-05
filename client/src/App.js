import './App.css';

//Component Imports
import Header from './components/header';
import UploadCSV from './components/UploadCSV'

//Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadCSV />
    </div>
  );
}

export default App;
