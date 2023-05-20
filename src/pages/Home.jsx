import { isThisMonth, isThisWeek, isToday } from "date-fns";
import parseISO from "date-fns/parseISO";
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

  //averages
  const [todayTemp, setTodayTemp] = useState([]);
  const [todayHum, setTodayHum] = useState([]);
  const [weekTemp, setWeekTemp] = useState([]);
  const [weekHum, setWeekHum] = useState([]);
  const [monthTemp, setMonthTemp] = useState([]);
  const [monthHum, setMonthHum] = useState([]);
  const [todayAverageTemp, setTodayAverageTemp] = useState(0);
  const [weekAverageTemp, setWeekAverageTemp] = useState(0);
  const [monthAverageTemp, setMonthAverageTemp] = useState(0);
  const [todayAverageHum, setTodayAverageHum] = useState(0);
  const [weekAverageHum, setWeekAverageHum] = useState(0);
  const [monthAverageHum, setMonthAverageHum] = useState(0);

  useEffect(() => {
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

    //average
    const calculateAverages = () => {
      //today
      var avgTodayTemp = 0;
      todayTemp.forEach((item) => {
        avgTodayTemp += parseFloat(item.temperature);
      });
      avgTodayTemp /= todayTemp.length;
      setTodayAverageTemp(avgTodayTemp.toPrecision(4));
      var avgTodayHum = 0;
      todayHum.forEach((item) => {
        avgTodayHum += parseFloat(item.humidity);
      });
      avgTodayHum /= todayHum.length;
      setTodayAverageHum(avgTodayHum.toPrecision(4));
      //week
      var avgWeekTemp = 0;
      weekTemp.forEach((item) => {
        avgWeekTemp += parseFloat(item.temperature);
      });
      avgWeekTemp /= weekTemp.length;
      setWeekAverageTemp(avgWeekTemp.toPrecision(4));
      var avgWeekHum = 0;
      weekHum.forEach((item) => {
        avgWeekHum += parseFloat(item.humidity);
      });
      avgWeekHum /= weekHum.length;
      setWeekAverageHum(avgWeekHum.toPrecision(4));
      //month
      var avgMonthTemp = 0;
      monthTemp.forEach((item) => {
        avgMonthTemp += parseFloat(item.temperature);
      });
      avgMonthTemp /= monthTemp.length;
      setMonthAverageTemp(avgMonthTemp.toPrecision(4));
      var avgMonthHum = 0;
      monthHum.forEach((item) => {
        avgMonthHum += parseFloat(item.humidity);
      });
      avgMonthHum /= monthHum.length;
      setMonthAverageHum(avgMonthHum.toPrecision(4));
    };
    //fetch
    const fetchData = async () => {
      //temp
      const tempResponse = await fetch("/api/temp");
      const temp = await tempResponse.json();
      temp.forEach((item) => {
        if (item.temperature != "nan") {
          if (isToday(parseISO(item.createdAt))) {
            setTodayTemp((todayTemp) => [...todayTemp, item]);
          }
          if (isThisWeek(parseISO(item.createdAt))) {
            setWeekTemp((weekTemp) => [...weekTemp, item]);
          }
          if (isThisMonth(parseISO(item.createdAt))) {
            setMonthTemp((monthTemp) => [...monthTemp, item]);
          }
        }
      });
      //hum
      const humResponse = await fetch("/api/hum");
      const hum = await humResponse.json();
      hum.forEach((item) => {
        if (item.humidity != "nan") {
          if (isToday(parseISO(item.createdAt))) {
            setTodayHum((todayHum) => [...todayHum, item]);
          }
          if (isThisWeek(parseISO(item.createdAt))) {
            setWeekHum((weekHum) => [...weekHum, item]);
          }
          if (isThisMonth(parseISO(item.createdAt))) {
            setMonthHum((monthHum) => [...monthHum, item]);
          }
        }
      });
      calculateAverages();
    };
    fetchLatestTemp();
    fetchLatestHum();
    fetchLatestLight();
    fetchLatestGas();
    fetchLatestMotion();
    fetchData();
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
          temp={todayAverageTemp}
          hum={todayAverageHum}
          divStyle="rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={currentTemp > todayAverageTemp ? false : true}
          humUp={currentHum > todayAverageHum ? false : true}
        />
        <Reading
          title={"This week"}
          temp={weekAverageTemp}
          hum={weekAverageHum}
          divStyle=" rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={currentTemp > weekAverageTemp ? false : true}
          humUp={currentHum > weekAverageHum ? false : true}
        />
        <Reading
          title={"This month"}
          temp={monthAverageTemp}
          hum={monthAverageHum}
          divStyle="rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={currentTemp > monthAverageTemp ? false : true}
          humUp={currentHum > monthAverageHum ? false : true}
        />
      </div>
    </main>
  );
};

export default Home;
