import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';
import BurgerConstructor from '../burgerConstructor/BurgerConstructor';
import logo from '../../images/logo.svg';
import './App.css';

 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AppHeader />
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
}


/* const App = () => {

  
  if (isCover) {
      return (
      <div className={Styles.App}>
          <Cover setIsCover={setIsCover} />
      </div>
      );
  } else {
      return (
      <div className={Styles.App}>
          
      </div>
      );
  }
  }; */


export default App;
