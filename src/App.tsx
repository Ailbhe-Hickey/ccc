import './App.css';

export default function MyApp() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Welcome to my app</h1>
          <MyButton />
      </header>
    </div>
  );
}

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}


