import Header from './components/Header';
import Time from "./components/Time";
import './assets/styles/common.less'
function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <Time />
      </main>
    </div>
  );
}

export default App;
