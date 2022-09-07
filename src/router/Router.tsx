import { FC } from "react";
import { Header } from "../components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

const Router: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/favorite" element={} />
        <Route path="/orders" element={} /> */}
      </Routes>
    </>
  );
};
export default Router;
