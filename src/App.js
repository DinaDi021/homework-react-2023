import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent/UserComponent.jsx';

const App = () => {
  return (
      <div className="App">
        <main className="App-header">
          <UserComponent
              id={99}
              name={'Hepatitis C'}
              status={"Dead"}
              species={'Disease'}
              gender={'unknown'}
              imageSrc={'https://rickandmortyapi.com/api/character/avatar/99.jpeg'}
          />
          <UserComponent
              id={328}
              name={'Slow Rick'}
              status={"Alive"}
              species={'Human'}
              gender={'Male'}
              imageSrc={'https://rickandmortyapi.com/api/character/avatar/328.jpeg'}
          />
          <UserComponent
              id={388}
              name={'Zeep Xanflorp'}
              status={"Alive"}
              species={'Humanoid'}
              gender={'Male'}
              imageSrc={'https://rickandmortyapi.com/api/character/avatar/388.jpeg'}
          />
          <UserComponent
              id={573}
              name={'Snake Hitler'}
              status={"Dead"}
              species={'Animal'}
              gender={'Male'}
              imageSrc={'https://rickandmortyapi.com/api/character/avatar/573.jpeg'}
          />
          <UserComponent
              id={619}
              name={'Professor Sanchez'}
              status={"Dead"}
              species={'Human'}
              gender={'Male'}
              imageSrc={'https://rickandmortyapi.com/api/character/avatar/619.jpeg'}
          />
          <UserComponent
              id={748}
              name={'Cenobite'}
              status={"unknown"}
              species={'Mythological Creature'}
              gender={'Male'}
              imageSrc={'https://rickandmortyapi.com/api/character/avatar/748.jpeg'}
          />
        </main>
      </div>
  );
}

export default App;
