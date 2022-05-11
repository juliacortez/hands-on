import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './Components/Header/Header';
import MainRoutes from './Routes/Router';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <MainRoutes />
      </Router>
  </div>
  );
}

export default App;
