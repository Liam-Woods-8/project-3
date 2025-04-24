import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Parks App</h1>
        <div className='search-bar'>
          <input type="text" placeholder='Search Parks'/>
          <button>Filter</button>
        </div>
      </header>
      <main>
        <div className="map-container">
        </div>
        <div className="grid-container">
          <div className="park-name-location">Park Name and Location</div>
          <div className="park-activities">Activities</div>
          <div className="facts">Quick Facts</div>
          <div className="park-details">Park Details</div>
        </div>
      </main>
    </div>
  );
}

export default App;
