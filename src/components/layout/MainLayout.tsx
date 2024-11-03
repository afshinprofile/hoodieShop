import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";

function MainLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default MainLayout;
