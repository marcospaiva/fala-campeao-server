import React, {useState, useEffect} from 'react';
import Header from './Header';
import Phrase from './Phrase';
import Footer from './Footer';
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
    <section className="app">
      <Header />
      <Phrase phrase={phrase} />
      <Footer />
    </section>
  );
}

export default App;
