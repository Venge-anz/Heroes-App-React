import { Link } from "react-router";

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego !== characters) {
    return <p>{characters}</p>;
  } else {
    return;
  }
};

//   const charactersByHero = <p>{characters}</p>;

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroURL = `/assets/heroes/${id}.jpg`;

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroURL} className="card-img" alt={superhero}></img>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>

                {/* {alter_ego !== characters && <p>{characters}</p>} */}
                {/* {alter_ego !== characters && characterByHero} */}
                <CharactersByHero
                  alter_ego={alter_ego}
                  characters={characters}
                />

                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`}>Mas informacion...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
