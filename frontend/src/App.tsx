import ThemeSwitcher from "./components/themeSwitcher";
import Cards from "./components/cards";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import getAPI from "./functions/getAPI";
import { useEffect, useState } from "react";
import DaysTemp from "./components/CardSubComponents/7daysTemp";

function App() {
  const [DAYS7, setDAYS7] = useState({});
  const [IsRainDAYS7, setIsRainDAYS7] = useState({});
  const [DAYS7Temp, setDAYS7Temp] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const dataRain7dats = await getAPI({ url: "/rain/7days" });
      setDAYS7(dataRain7dats);

      const dataIsRain7dats = await getAPI({ url: "/rain/7days/isRain" });
      setIsRainDAYS7(dataIsRain7dats);

      const dataTemp7dats = await getAPI({ url: "/temp/7days/amount" });
      setDAYS7Temp(dataTemp7dats);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <NavBar />
        <Cards rain7Days={IsRainDAYS7} temp7Days={DAYS7Temp} />
      </main>
      <Footer project="React Tailwind" name="Tailwind" />
    </div>
  );
}

export default App;
