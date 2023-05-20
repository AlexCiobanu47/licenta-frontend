import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Chart = ({
  data,
  selectTemp,
  isTemp,
  selectHum,
  isHum,
  handleDayClick,
  handleWeekClick,
  handleMonthClick,
}) => {
  return (
    <div className="m-4 p-4 rounded-3xl bg-chart flex-1">
      <div className="buttons flex items-center justify-between">
        <button
          id="tempButton"
          className="mx-2 border-b-2 border-transparent text-2xl hover:border-b-3 hover:border-red-600 focus:border-transparent"
          onClick={selectTemp}
        >
          Temperature
        </button>
        <p>|</p>
        <button
          id="humButton"
          className="mx-2 border-b-2 border-transparent text-2xl hover:border-b-3 hover:border-red-600 focus:border-transparent"
          onClick={selectHum}
        >
          Humidity
        </button>
        <button onClick={handleDayClick}>Day</button>
        <button onClick={handleWeekClick}>Week</button>
        <button onClick={handleMonthClick}>Month</button>
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
