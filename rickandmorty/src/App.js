import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Pagination from './components/Pagination/Pagination.component';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.component';
import CharacterList from './components/Character/CharacterList.component';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersData, setCharactersData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const url = "https://rickandmortyapi.com/api/character/";
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${url}?page=${pageNumber}`)
      .then(res => {
        setCharactersData(res.data);
      })
      .catch(err => {
        debugger;
      })
  }, [pageNumber]);

  const changePage = (evt, nextPageNumber) => {    
    evt.preventDefault();
    return setPageNumber(pageNumber + nextPageNumber);
  } 

  if(!charactersData) { return <LoadingScreen /> }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Pagination clickHandler={changePage} pageNumber={pageNumber}/>
      <CharacterList charactersData={charactersData.results}/>
    </div>
  );
}

export default App;
