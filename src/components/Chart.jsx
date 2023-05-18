import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Chart = () => {
  const data = [
    {
      name: "Page A",
      Temperature: 4000,
      Humidity: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      Temperature: 3000,
      Humidity: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      Temperature: 2000,
      Humidity: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      Temperature: 2780,
      Humidity: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      Temperature: 1890,
      Humidity: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      Temperature: 2390,
      Humidity: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      Temperature: 3490,
      Humidity: 4300,
      amt: 2100,
    },
  ];
  const [isTemp, setIsTemp] = useState(true);
  const [isHum, setIsHum] = useState(false);
  const tempButton = document.getElementById("tempButton");
  const humButton = document.getElementById("humButton");
  const handleTempClick = () => {
    //fetch temperatures
    console.log("temperature graph");
    setIsTemp(true);
    setIsHum(false);
    tempButton.classList.add("text-red-600");
    humButton.classList.remove("text-red-600");
  };
  const handlehumidityClick = () => {
    //fetch humidities
    console.log("humidity graph");
    setIsTemp(false);
    setIsHum(true);
    tempButton.classList.remove("text-red-600");
    humButton.classList.add("text-red-600");
  };
  return (
    <div className="m-4 p-4 rounded-3xl bg-chart flex-1">
      <div className="buttons flex items-center">
        <button
          id="tempButton"
          className="mx-2 border-b-2 border-transparent text-2xl hover:border-b-3 hover:border-red-600 focus:border-transparent"
          onClick={handleTempClick}
        >
          Temperature
        </button>
        <p>|</p>
        <button
          id="humButton"
          className="mx-2 border-b-2 border-transparent text-2xl hover:border-b-3 hover:border-red-600 focus:border-transparent"
          onClick={handlehumidityClick}
        >
          Humidity
        </button>
      </div>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {isTemp && (
          <Line
            type="monotone"
            dataKey="Temperature"
            stroke="black"
            activeDot={{ r: 6 }}
          />
        )}
        {isHum && <Line type="monotone" dataKey="Humidity" stroke="black" />}
      </LineChart>
    </div>
  );
};

export default Chart;
