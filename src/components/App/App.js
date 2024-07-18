import './App.css';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';
import { useState, useEffect } from 'react';

function App() {
  const [ideas, setIdeas] = useState([]);

  function getIdeas() {
    fetch('http://localhost:3001/api/v1/ideas')
      .then(response => response.json())
      .then(data => {
        setIdeas(data); // Update the state with fetched data
      })
      .catch(error => console.log(error.message));
  }

  useEffect(() => {
    getIdeas();
  }, []);

  function addIdea(newIdea) {
    setIdeas([...ideas, newIdea]);
  }

  function deleteIdea(id) {
    const filteredIdeas = ideas.filter(idea => idea.id !== id);
    setIdeas(filteredIdeas);
  }

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      <p>Hi!</p>
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} deleteIdea={deleteIdea} />
    </main>
  );
}

export default App;
