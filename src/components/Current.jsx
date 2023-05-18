import { AiOutlineCheckCircle } from "react-icons/ai";
const Performance = () => {
  return (
    <div
      id="performance-wrapper"
      className="rounded-3xl m-4 p-4 bg-slate-900 text-white flex-1"
    >
      <div className="grid grid-cols-4">
        <h1 className="col-span-4 ml-4 mb-4 text-2xl">Current</h1>
        <div className="col-span-4 flex justify-center mb-4">
          <div className="pr-6 border-r-2 flex flex-col justify-center items-center">
            <h1 className="text-2xl">20&#176;</h1>
            <p className="text-xs">Temperature</p>
          </div>
          <div className="pl-6 flex flex-col justify-center items-center">
            <h1 className="text-2xl">44%</h1>
            <p className="text-xs">Humidity</p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-3 ml-4">
        <div className="flex items-center mt-4">
          <AiOutlineCheckCircle size={40} />
          <span className="ml-1">
            <strong>Light </strong>is ON
          </span>
        </div>
        <div className="flex items-center mt-4">
          <AiOutlineCheckCircle size={40} />
          <span className="ml-1">
            <strong>Motion</strong> was detected
          </span>
        </div>
        <div className="flex items-center mt-4">
          <AiOutlineCheckCircle size={40} />
          <span className="ml-1">
            <strong>Gas leak </strong> was detected
          </span>
        </div>
      </div>
    </div>
  );
};

export default Performance;
