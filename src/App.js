import './App.css';
import vinylAlbums from './vinylAlbums';
import DisplayAlbums from './DisplayAlbums';

function App() {
  return (
    <div className="App">
      <h1>My Vinyl Collection</h1>
      <DisplayAlbums vinylAlbums={vinylAlbums} />
    </div>
  );
}

export default App;