import ArtistHeader from './components/Heading'
import ArtistDetails from './components/ArtistDetails'


 function App() {
  const artistList = artist.map(artist => <artist key={artist.name} artist={artist} />);

  return (
    <div class="app">
      
        <header>
          {ArtistHeader}
        </header>
      

      <main>
        <div>
          {ArtistDetails}
        </div>
      </main>
    </div>
  );
}

export default App;