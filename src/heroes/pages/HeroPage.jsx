import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]); //Memorizar

  let navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <div className="row m-t5">
      <div className=" col-4">
        <img
          src={`/public/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="animate__animated animate__bounceInLeft img-thumbnail"
        ></img>
      </div>
      <div className=" col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appareance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button
          // onClick={() => navigate("/marvel")} //otra forma
          onClick={onNavigateBack}
          className="btn btn-outline-primary"
        >
          Back
        </button>
      </div>
    </div>
  );
};
