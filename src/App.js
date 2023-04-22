
import { useState } from 'react';
import './App.css';
import Liste from './components/Liste';
import Addmovie from './components/Addmovie';
import Search from './components/Search';

function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      title: 'TROY',
      rating: 5,
      description: 'Est un film américain réalisé par Wolfgang Petersen (2004), durée : 163 min ',
      posterURL: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5P9H/image?locale=fr-ca&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg',
    },
    {
      id: Math.random(),
      title: 'Black Adam',
      rating: 3,
      description: 'Action, 2022, États-Unis, 1h59min réalisé par Jaume Collet-Serra',
      posterURL: 'https://cdn.chili.com/images/public/cms/3c/bc/3b/95/3cbc3b95-b19a-4075-890a-07879a048260.jpg?width=330',
    },
    {
      id: Math.random(),
      title: 'Maléfique',
      rating: 4,
      description: 'Starring Angelina Jolie, Elle Fanning, and Sharlto Copley; Directed by Robert Stromberg',
      posterURL: 'https://files.datathistle.com/images/2019/10/18/maleficent-2.jpg',
    },
  ])
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

    const [search, setsearch] = useState("")
    const [stars, setstars] = useState(1)
    const handleSearch = (e) => { setsearch(e.target.value); };
    const handleStars = (x) => { setstars(x) };
    return (
      <div className="App">
        <Search rating={stars} search={search} handleSearch={handleSearch} handleRating={handleStars} />
        <Liste  films={movies.filter(el => el.name.toLowerCase().includes(search.toLowerCase()) && el.rating >= stars)} />
        <Addmovie addMovie={addMovie} />
      </div>
    );
  }


export default App;
