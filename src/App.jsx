import { Card } from "../components/Card";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="main-title">Men's 100m World Ranking</h1>
        <p className="subtitle">Top Sprinters Ranked by Performance</p>
        <Card />
      </div>

    <footer className="footer">
  <p className="footer-text">
    Created by <a href="https://github.com/krutarth-raval" target="_blank" rel="noopener noreferrer">Krutarth</a> &copy; {new Date().getFullYear()}
  </p>
</footer>

    </>
  );
};

export default App;
