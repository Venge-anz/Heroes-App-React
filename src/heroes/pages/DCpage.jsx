import { HeroList } from "../components";

export const DCpage = () => {
  return (
    <>
      <h1 className="animate__animated animate__pulse p-4">DC Comics</h1>
      <hr />
      <HeroList publisher={"DC Comics"} />
    </>
  );
};
