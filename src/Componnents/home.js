import 'C:/Users/jihen/usestate-app/src/App.css';
import MovieList from 'C:/Users/jihen/usestate-app/src/Componnents/MovieList';
import AddMovie from 'C:/Users/jihen/usestate-app/src/Componnents/addMovie';


const Home = ({ objs, setobjs }) => {
    const addMovie = (obj) => {
      setobjs([...objs, obj]);
    };
  
    return (
      <>
        <h1>This is the list of what you should do</h1>
        <AddMovie handleAdd={addMovie} />
        <MovieList MovieCards={objs} />
      </>
    );
  };
  
  export default Home;
  