import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/img/TempelCode_logo.png';
import './App.css';

function Scoreboard() {
  return (
    <div>
      <div className="Scoreboard">
        <img width="500" alt="icon" src={icon} />
      </div>
      <h1>Scoreboard</h1>
      <div id="scoreboard">
        <table>
          <thead>
            <tr>
              <th>Speler</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Speler 1</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Speler 2</td>
              <td>85</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scoreboard />} />
      </Routes>
    </Router>
  );
}
