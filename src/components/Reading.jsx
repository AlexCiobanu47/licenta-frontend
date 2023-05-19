// import format from "date-fns/format";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
const Reading = ({
  title,
  temp,
  hum,
  divStyle,
  h1Style,
  h3Style,
  tempUp,
  humUp,
}) => {
  const tempString = `${temp}\u00B0C`;
  const humString = `${hum}%`;
  return (
    <div className={`${divStyle}`}>
      <div className="col-span-4 mb-4">
        <h1 className={`${h1Style}`}>{title}</h1>
      </div>
      <div className="col-span-2 flex justify-center items-center text-xl">
        <h3 className={`${h3Style}`}>{tempString}</h3>
        <div className="col-span-1 flex justify-center items-center">
          {tempUp ? (
            <AiOutlineArrowUp color="green" size={20} />
          ) : (
            <AiOutlineArrowDown color="red" size={20} />
          )}
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center text-xl">
        <h3 className={`${h3Style}`}>{humString}</h3>
        <div className="col-span-1 flex justify-center items-center">
          {humUp ? (
            <AiOutlineArrowUp color="green" size={20} />
          ) : (
            <AiOutlineArrowDown color="red" size={20} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Reading;
