import List from "./components/List";
import AddInternship from "./components/AddInternship";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>HELLO </h1>
        <nav>
          <ul>
            <li>
              <Link to="./components/List">Home</Link>
            </li>
            <li>
              <Link to="./components/AddInternship">Add</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/*       
    <div>
      
      <List />
      <AddInternship />
    </div> */}
      <Routes>
        <Route path="./components/List" element={<List />}></Route>
        <Route
          path="./components/AddInternship"
          element={<AddInternship />}
        ></Route>
      </Routes>
      <List />
      <AddInternship />
    </Router>
  );
}

export default App;
