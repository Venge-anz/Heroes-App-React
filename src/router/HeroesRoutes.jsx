import { Navigate, Route, Routes, useLocation } from "react-router";

import { Navbar } from "../ui";

import { MarvelPage, DCpage, HeroPage } from "../heroes";
import { LoginPage, SearchPage } from "../auth";

export const HeroesRoutes = () => {
  // Localizamos la ubicacion de loging para poder esconder el navbar cuando se muestre
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCpage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          {/* Para una ruta COMODIN */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
