import Chart from "../components/Chart";
import Performance from "../components/Performance";
import Reading from "../components/Reading";
const Home = () => {
  return (
    <main className="w-full grid grid-cols-5">
      <div className="col-span-2">
        <Performance />
      </div>
      <div className="col-span-3">
        <Chart />
      </div>
      <div className="home-readings grid grid-cols-3 col-span-5 gap-2 m-20 border border-black rounded-md p-4">
        <h1 className="col-span-3 text-center font-bold">Current readings</h1>
        <Reading
          reading={"Today's average"}
          title={"20"}
          divStyle="border border-black rounded-md p-4"
        />
        <Reading
          reading={"This week's average"}
          title={"20"}
          divStyle="border border-black rounded-md p-4"
        />
        <Reading
          reading={"This month's average"}
          title={"20"}
          divStyle="border border-black rounded-md p-4"
        />
      </div>
    </main>
  );
};

export default Home;
