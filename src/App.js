import './App.css';
import Header from './page/Dashboard/Header';
import List from './page/Dashboard/List';
import Dashboard from './page/Dashboard';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <Dashboard />
        <Helmet>
        <meta charSet="utf-8" />
        <title>Gestion Des Employés</title>
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        
    </div>

  );
}

export default App;
