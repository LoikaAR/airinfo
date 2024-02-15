import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar.js';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <main>
        <div className='App-sidebar'>
          <Sidebar />
        </div>

        <body>
          this will be the body
        </body>
      </main>

      {/* <Footer /> */}
    </div>

  );
}

// export default App;
