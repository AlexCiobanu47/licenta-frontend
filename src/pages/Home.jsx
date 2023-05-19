import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import Current from "../components/Current";
import Reading from "../components/Reading";
const Home = () => {
  //current
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentHum, setCurrentHum] = useState(0);
  const [currentLight, setCurrentLight] = useState(0);
  const [currentGas, setCurrentGas] = useState(0);
  const [currentMotion, setCurrentMotion] = useState(0);
  const fetchLatestTemp = async () => {
    const response = await fetch("/api/temp/latest");
    const json = await response.json();
    setCurrentTemp(json[0].temperature);
  };
  const fetchLatestHum = async () => {
    const response = await fetch("/api/hum/latest");
    const json = await response.json();
    setCurrentHum(json[0].humidity);
  };
  const fetchLatestLight = async () => {
    const response = await fetch("/api/light/latest");
    const json = await response.json();
    setCurrentLight(json[0].light);
  };
  const fetchLatestGas = async () => {
    const response = await fetch("/api/gas/latest");
    const json = await response.json();
    setCurrentGas(json[0].gasConcentration);
  };
  const fetchLatestMotion = async () => {
    const response = await fetch("/api/motion/latest");
    const json = await response.json();
    setCurrentMotion(json[0].motion);
  };
  //averages
  const [todayData, setTodayData] = useState([]);
  const [weekData, setWeekData] = useState([]);
  const [monthData, setMonthData] = useState([]);
  const [todayTemp, setTodayTemp] = useState(0);
  const [todayHum, setTodayHum] = useState(0);

  const fetchTodayData = async () => {
    var avgTemp = 0;
    var avgHum = 0;
    //temp
    const tempResponse = await fetch("/api/temp");
    const temp = await tempResponse.json();
    temp.forEach((item) => {
      if (item.temperature != "nan") avgTemp += parseFloat(item.temperature);
    });
    avgTemp /= temp.length;
    setTodayTemp(avgTemp.toPrecision(3));
    //humidity
    const humResponse = await fetch("/api/hum");
    const hum = await humResponse.json();
    hum.forEach((item) => {
      if (item.humidity != "nan") avgHum += parseFloat(item.humidity);
    });
    avgHum /= hum.length;
    setTodayHum(avgHum.toPrecision(3));
  };

  useEffect(() => {
    fetchLatestTemp();
    fetchLatestHum();
    fetchLatestLight();
    fetchLatestGas();
    fetchLatestMotion();
    //average
    fetchTodayData();
  }, []);
  return (
    <main className="grid grid-cols-5 bg-background rounded-3xl">
      <div className="col-span-2 flex">
        <Current
          temp={currentTemp}
          hum={currentHum}
          light={currentLight}
          gas={currentGas}
          motion={currentMotion}
        />
      </div>
      <div className="col-span-3 flex">
        <Chart />
      </div>
      <div className="home-readings grid grid-cols-3 col-span-5 gap-2 m-5 rounded-3xl p-4 bg-readings">
        <h1 className="col-span-3 m-4 text-2xl">Average readings</h1>
        <Reading
          title={"Today"}
          temp={todayTemp}
          hum={todayHum}
          divStyle="rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={false}
          humUp={false}
        />
        <Reading
          title={"This week"}
          temp={"24"}
          hum={"50"}
          divStyle=" rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={true}
          humUp={false}
        />
        <Reading
          title={"This month"}
          temp={"23"}
          hum={"60"}
          divStyle="rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={true}
          humUp={true}
        />
      </div>
    </main>
  );
};

export default Home;
