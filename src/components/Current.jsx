import { AiOutlineCheckCircle } from "react-icons/ai";
const Current = ({ temp, hum, light, gas, motion }) => {
  const tempString = `${temp}\u00B0C`;
  const humString = `${hum}%`;
  const lightString = light ? "ON" : "OFF";
  const gasString = gas;
  const motionString = motion ? "DETECTED" : "NOT DETECTED";
  return (
    <div
      id="performance-wrapper"
      className="rounded-3xl m-4 p-4 bg-slate-900 text-white flex-1"
    >
      <div className="grid grid-cols-4">
        <h1 className="col-span-4 ml-4 mb-4 text-2xl">Current</h1>
        <div className="col-span-4 flex justify-center mb-4">
          <div className="pr-6 border-r-2 flex flex-col justify-center items-center">
            <h1 className="text-2xl">{tempString}</h1>
            <p className="text-xs">Temperature</p>
          </div>
          <div className="pl-6 flex flex-col justify-center items-center">
            <h1 className="text-2xl">{humString}</h1>
            <p className="text-xs">Humidity</p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-3 ml-4">
        <div className="flex items-center mt-4">
          <AiOutlineCheckCircle size={40} />
          <span className="ml-1">
            <strong>Light </strong>is {lightString}
          </span>
        </div>
        <div className="flex items-center mt-4">
          <AiOutlineCheckCircle size={40} />
          <span className="ml-1">
            <strong>Motion </strong>
            {motionString}
          </span>
        </div>
        <div className="flex items-center mt-4">
          <AiOutlineCheckCircle size={40} />
          <span className="ml-1">
            <strong>Gas concentration </strong> {gasString}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Current;
