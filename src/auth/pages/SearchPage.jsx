import { HeroCard } from "../../heroes/components";
import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { getHeroesByName } from "../../heroes";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  //condiciones buscador
  const showSearch = q.length === 0;
  const showError = heroes.length === 0 && q.length > 0;

  const { searchText, onInputChange } = useForm({ searchText: "" });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1 className="animate__animated animate__pulse p-4">Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching:</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>

          <hr />
          {/* {q === "" ? (
            <div className="alert alert-primary">Seach a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">There's not results.</div>
            )
          )} */}
          <div
            className="alert alert-primary animate__animated animate__fadeIn "
            style={{ display: showSearch ? "" : "none" }}
          >
            Seach a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            There's not results.
          </div>

          {heroes.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </>
  );
};
