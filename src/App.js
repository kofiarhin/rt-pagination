import { useEffect } from "react";
import Search from "./Components/Search/Search.component";
import "./app.styles.css";
import Templates from "./Components/Templates/Templates.component";
import Pagination from "./Components/Pagination/Pagination.component";
const App = () => {
  return (
    <div className="container">
      <Search />
      <Templates />
      <Pagination />
    </div>
  );
};

export default App;
