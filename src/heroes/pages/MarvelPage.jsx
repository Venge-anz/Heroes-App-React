import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1 className="animate__animated animate__pulse p-4">Marvel Comics</h1>
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </>
  );
};
