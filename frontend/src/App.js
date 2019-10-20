import React, {useState, useEffect} from 'react';
import api from './Api';

function App() {

  const [phrase, setPhrase ] = useState([]);

  useEffect( () => {
    async function loadPhrases(){
      const response = await api.get();
      setPhrase(response.data);

      document.title = response.data;
    }
    loadPhrases();
  }, []);



  return (
    <h1> <span role="img" aria-label="beer">🍻</span> {phrase}</h1>
  );
}

export default App;
