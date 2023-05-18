// import format from "date-fns/format";
const Reading = ({ reading, title, divStyle, h1Style, h3Style }) => {
  return (
    <div className={`${divStyle}`}>
      {/* <h4>
        {reading.sensor} {title}
      </h4>
      <p>{reading.value}</p>
      <p>Time: {format(new Date(reading.createdAt), "hh:mm:ss")}</p>
      <p>Date: {format(new Date(reading.createdAt), "dd/MM/yyyy")}</p> */}
      <h1 className={`${h1Style}`}>{reading}</h1>
      <h3 className={`${h3Style}`}>{title}</h3>
    </div>
  );
};
export default Reading;
