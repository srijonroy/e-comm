import { Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';

const Hats = () => {
  return <h1>HATS</h1>
}

function App() {
  return (
    <div >
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' render={() => <Hats />}/>
    </div>
  );
}

export default App;
