import { useEffect, useState } from "react";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import CardResident from "./components/CardResident";
import axios from "axios";
import Pagination from "./components/Pag";

function App() {
  const [location, setLocation] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    let randomLocation;
    if (search === "") {
      randomLocation = Math.ceil(Math.random() * (126 - 1) + 1);
    } else {
      randomLocation = search;
    }
    const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [search]);

  const handleSubmirt = (e) => {
    e.preventDefault();
    setSearch(e.target.search1.value);
  };

  const [page, setPage] = useState(1);
  const [porPage, setPorPage] = useState(8);
  const maximo = Math.ceil(location?.residents.length / porPage);

  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <div className="App">
      <nav className="head">
        <h1>
          <img
            className="image"
            src="/img/logo.png"
            alt="efecto-brillo"
            border="0"
          />
        </h1>
        <form className="form" onSubmit={handleSubmirt}>
          <input className="for_i" id="search1" type="text" />
          <button className="but_s">
            <i className="bx bx-search-alt"></i>
          </button>
        </form>
      </nav>
      <div className="location">
        <LocationInfo location={location} />
      </div>
      <section className="resid">
        {location?.residents
          .slice((page - 1) * porPage, (page - 1) * porPage + porPage)
          .map((url) => (
            <CardResident key={url} url={url} />
          ))}
      </section>
      <Pagination
        page={page}
        setPage={setPage}
        maximo={maximo}
        paginate={paginate}
        porPage={porPage}
      />
    </div>
  );
}

export default App;
