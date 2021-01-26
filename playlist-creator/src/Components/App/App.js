import "./App.css";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class App extends React.Component {
  render() {
    <div>
      <h1>
        Ja<span class="highlight">mmm</span>ing
      </h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>;
  }
}

export default App;
