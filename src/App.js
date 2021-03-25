
import './assets/css/css-reset.css';
import './assets/scss/desktop-style.css';
import './assets/scss/tablet-style.css';
import './assets/scss/mobileLandscape-style.css';
import './assets/scss/mobile-style.css';
import { BgApp } from './Component/BgApp';
import { MainApp } from './Pages/MainApp';

function App() {
  return (
    <div className="App">
      <BgApp />
      <MainApp />
    </div>
  );
}

export default App;
