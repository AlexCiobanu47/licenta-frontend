import format from "date-fns/format";
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
  const [data, setData] = useState([]);
  const [isTemp, setIsTemp] = useState(true);
  const [isHum, setIsHum] = useState(false);
  const tempButton = document.getElementById("tempButton");
  const humButton = document.getElementById("humButton");
  const handleTempClick = () => {
    //fetch temperatures
    setIsTemp(true);
    setIsHum(false);
    tempButton.classList.add("text-red-600");
    humButton.classList.remove("text-red-600");
    fetchTemp();
  };
  const handlehumidityClick = () => {
    //fetch humidities
    setIsTemp(false);
    setIsHum(true);
    tempButton.classList.remove("text-red-600");
    humButton.classList.add("text-red-600");
    fetchHum();
  };
  const fetchTemp = async () => {
    const response = await fetch("/api/temp");
    const temp = await response.json();
    temp.forEach((item) => {
      item.createdAt = format(new Date(item.createdAt), "MM/dd/yyyy hh:mm");
    });
    setData(temp);
  };
  const fetchHum = async () => {
    const response = await fetch("/api/hum");
    const hum = await response.json();
    hum.forEach((item) => {
      item.createdAt = format(new Date(item.createdAt), "MM/dd/yyyy hh:mm");
    });
    setData(hum);
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
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        {isTemp && (
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="black"
            // activeDot={{ r: 6 }}
          />
        )}
        {isHum && <Line type="monotone" dataKey="humidity" stroke="black" />}
      </LineChart>
    </div>
  );
};

export default Chart;
