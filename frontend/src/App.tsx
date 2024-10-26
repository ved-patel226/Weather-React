import ThemeSwitcher from "./components/themeSwitcher";
import Cards from "./components/cards";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import getAPI from "./functions/getAPI";
import { useEffect, useState } from "react";

function App() {
  const [DAYS7, setDAYS7] = useState({});
  const [IsRainDAYS7, setIsRainDAYS7] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const dataRain7dats = await getAPI({ url: "/rain/7days" });
      setDAYS7(dataRain7dats);

      const dataIsRain7dats = await getAPI({ url: "/rain/7days/isRain" });
      setIsRainDAYS7(dataIsRain7dats);
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <Cards rain7Days={IsRainDAYS7} />
      <Footer project="React Tailwind" name="Tailwind" />
    </>
  );
}

export default App;
