import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Boston" />

      <footer>
        Front-end by Anna Vansacova, open-sourced on{" "}
        <a
          href="https://github.com/AnnaVans/react-app-weather"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
