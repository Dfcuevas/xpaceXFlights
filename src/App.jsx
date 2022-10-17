import { Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router";

import logo from "./assets/spacexwhite.png";
import LaunchDetail from "./components/LaunchDetail";
import LaunchList from "./components/LaunchList";
import RocketDetails from "./components/RocketDetails";

export default function App() {
  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetail />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );
}
