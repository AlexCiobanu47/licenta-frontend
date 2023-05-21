import { isThisMonth, isThisWeek, isToday } from "date-fns";
import format from "date-fns/format";
import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import Current from "../components/Current";
import Reading from "../components/Reading";
const Home = () => {
  //current
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentHum, setCurrentHum] = useState(0);
  const [currentGas, setCurrentGas] = useState(0);
  const [currentLight, setCurrentLight] = useState(0);
  const [currentMotion, setCurrentMotion] = useState(0);
  //average
  const [dayTemp, setDayTemp] = useState([]);
  const [dayTempAverage, setDayTempAverage] = useState(0);
  const [dayHum, setDayHum] = useState([]);
  const [dayHumAverage, setDayHumAverage] = useState(0);
  const [weekTemp, setWeekTemp] = useState([]);
  const [weekTempAverage, setWeekTempAverage] = useState(0);
  const [weekHum, setWeekHum] = useState([]);
  const [weekHumAverage, setWeekHumAverage] = useState(0);
  const [monthTemp, setMonthTemp] = useState([]);
  const [monthTempAverage, setMonthTempAverage] = useState(0);
  const [monthHum, setMonthHum] = useState([]);
  const [monthHumAverage, setMonthHumAverage] = useState(0);

  //chart
  const [data, setData] = useState([]);
  const [chartInterval, setChartInterval] = useState("month");
  const [isTemp, setIsTemp] = useState(true);
  const [isHum, setIsHum] = useState(false);
  const tempButton = document.getElementById("tempButton");
  const humButton = document.getElementById("humButton");
  const dayButton = document.getElementById("dayButton");
  const weekButton = document.getElementById("weekButton");
  const monthButton = document.getElementById("monthButton");
  const handleDaySelect = () => {
    setChartInterval("day");
    dayButton.classList.add("text-red-600");
    weekButton.classList.remove("text-red-600");
    monthButton.classList.remove("text-red-600");
  };
  const handleWeekSelect = () => {
    setChartInterval("week");
    dayButton.classList.remove("text-red-600");
    weekButton.classList.add("text-red-600");
    monthButton.classList.remove("text-red-600");
  };
  const handleMonthSelect = () => {
    setChartInterval("month");
    dayButton.classList.remove("text-red-600");
    weekButton.classList.remove("text-red-600");
    monthButton.classList.add("text-red-600");
  };
  const handleTempClick = () => {
    //fetch temperatures
    setIsTemp(true);
    setIsHum(false);
    tempButton.classList.add("text-red-600");
    humButton.classList.remove("text-red-600");
  };
  const handlehumidityClick = () => {
    //fetch humidities
    setIsTemp(false);
    setIsHum(true);
    tempButton.classList.remove("text-red-600");
    humButton.classList.add("text-red-600");
  };
  useEffect(() => {
    const fetchData = async () => {
      setData([]);
      if (isTemp) {
        const response = await fetch("/api/temp");
        const jsonResponse = await response.json();
        const dataCopy = jsonResponse.slice(0);
        dataCopy.forEach((item) => {
          if (isToday(new Date(item.createdAt)) && chartInterval == "day") {
            item.createdAt = format(new Date(item.createdAt), "hh:mm");
            setData((data) => [item, ...data]);
            setDayTemp((dayTemp) => [item, ...dayTemp]);
          }
          if (
            isThisWeek(new Date(item.createdAt), { weekStartsOn: 1 }) &&
            chartInterval == "week"
          ) {
            item.createdAt = format(new Date(item.createdAt), "EEEE");
            setData((data) => [item, ...data]);
            setWeekTemp((weekTemp) => [item, ...weekTemp]);
          }
          if (
            isThisMonth(new Date(item.createdAt)) &&
            chartInterval == "month"
          ) {
            item.createdAt = format(new Date(item.createdAt), "dd/MM");
            setData((data) => [item, ...data]);
            setMonthTemp((monthTemp) => [item, ...monthTemp]);
          }
        });
      }
      if (isHum) {
        const response = await fetch("/api/hum");
        const jsonResponse = await response.json();
        const dataCopy = jsonResponse.slice(0);
        dataCopy.forEach((item) => {
          if (isToday(new Date(item.createdAt)) && chartInterval == "day") {
            item.createdAt = format(new Date(item.createdAt), "hh:mm");
            setData((data) => [item, ...data]);
            setDayHum((dayHum) => [item, ...dayHum]);
          }
          if (
            isThisWeek(new Date(item.createdAt), { weekStartsOn: 1 }) &&
            chartInterval == "week"
          ) {
            item.createdAt = format(new Date(item.createdAt), "EEEE");
            setData((data) => [item, ...data]);
            setWeekHum((weekHum) => [item, ...weekHum]);
          }
          if (
            isThisMonth(new Date(item.createdAt)) &&
            chartInterval == "month"
          ) {
            item.createdAt = format(new Date(item.createdAt), "dd/MM");
            setData((data) => [item, ...data]);
            setMonthHum((monthHum) => [item, ...monthHum]);
          }
        });
      }
      //calculate averages
      //day
      var dayTempAvg = 0;
      dayTemp.forEach((item) => {
        if (item.temperature != "nan") {
          dayTempAvg += parseFloat(item.temperature);
        }
      });
      dayTempAvg /= dayTemp.length;
      setDayTempAverage(dayTempAvg.toPrecision(4));
      var dayHumAvg = 0;
      dayHum.forEach((item) => {
        if (item.humidity != "nan") {
          dayHumAvg += parseFloat(item.humidity);
        }
      });
      dayHumAvg /= dayHum.length;
      setDayHumAverage(dayHumAvg.toPrecision(4));
      //week
      var weekTempAvg = 0;
      weekTemp.forEach((item) => {
        if (item.temperature != "nan") {
          weekTempAvg += parseFloat(item.temperature);
        }
      });
      weekTempAvg /= weekTemp.length;
      setWeekTempAverage(weekTempAvg.toPrecision(4));
      var weekHumAvg = 0;
      weekHum.forEach((item) => {
        if (item.humidity != "nan") {
          weekHumAvg += parseFloat(item.humidity);
        }
      });
      weekHumAvg /= weekHum.length;
      setWeekHumAverage(weekHumAvg.toPrecision(4));
      //month
      var monthTempAvg = 0;
      monthTemp.forEach((item) => {
        if (item.temperature != "nan") {
          monthTempAvg += parseFloat(item.temperature);
        }
      });
      monthTempAvg /= monthTemp.length;
      setMonthTempAverage(monthTempAvg.toPrecision(4));
      var monthHumAvg = 0;
      monthHum.forEach((item) => {
        if (item.humidity != "nan") {
          monthHumAvg += parseFloat(item.humidity);
        }
      });
      monthHumAvg /= monthHum.length;
      setMonthHumAverage(monthHumAvg.toPrecision(4));
      //current
      const tempResponse = await fetch("/api/temp/latest");
      const jsonTempResponse = await tempResponse.json();
      setCurrentTemp(jsonTempResponse[0].temperature);
      const humResponse = await fetch("/api/hum/latest");
      const jsonHumResponse = await humResponse.json();
      setCurrentHum(jsonHumResponse[0].humidity);
      const gasResponse = await fetch("/api/gas/latest");
      const jsonGasResponse = await gasResponse.json();
      setCurrentGas(jsonGasResponse[0].gasConcentration);
      const lightResponse = await fetch("/api/light/latest");
      const jsonLightResponse = await lightResponse.json();
      setCurrentLight(jsonLightResponse[0].light);
      const motionResponse = await fetch("/api/motion/latest");
      const jsonMotionResponse = await motionResponse.json();
      setCurrentMotion(jsonMotionResponse[0].motion);
    };
    fetchData();
  }, [isTemp, isHum, chartInterval]);

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
        <Chart
          data={data}
          selectTemp={handleTempClick}
          isTemp={isTemp}
          selectHum={handlehumidityClick}
          isHum={isHum}
          handleDayClick={handleDaySelect}
          handleWeekClick={handleWeekSelect}
          handleMonthClick={handleMonthSelect}
        />
      </div>
      <div className="home-readings grid grid-cols-3 col-span-5 gap-2 m-5 rounded-3xl p-4 bg-readings">
        <h1 className="col-span-3 m-4 text-2xl">Average readings</h1>
        <Reading
          title={"Today"}
          temp={dayTempAverage}
          hum={dayHumAverage}
          divStyle="rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={currentTemp > dayTempAverage ? false : true}
          humUp={currentHum > dayHumAverage ? false : true}
        />
        <Reading
          title={"This week"}
          temp={weekTempAverage}
          hum={weekHumAverage}
          divStyle=" rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          // tempUp={currentTemp > weekAverageTemp ? false : true}
          // humUp={currentHum > weekAverageHum ? false : true}
        />
        <Reading
          title={"This month"}
          temp={monthTempAverage}
          hum={monthHumAverage}
          divStyle="rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={currentTemp > monthTempAverage ? false : true}
          humUp={currentHum > monthHumAverage ? false : true}
        />
      </div>
    </main>
  );
};

export default Home;
