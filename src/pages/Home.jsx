import Chart from "../components/Chart";
import Current from "../components/Current";
import Reading from "../components/Reading";
const Home = () => {
  return (
    <main className="grid grid-cols-5 bg-background rounded-3xl">
      <div className="col-span-2 flex">
        <Current />
      </div>
      <div className="col-span-3 flex">
        <Chart />
      </div>
      <div className="home-readings grid grid-cols-3 col-span-5 gap-2 m-5 rounded-3xl p-4 bg-readings">
        <h1 className="col-span-3 m-4 text-2xl">Average readings</h1>
        <Reading
          reading={"Today's averages"}
          title={"20 \u00B0 C | 44%"}
          divStyle="border border-black rounded-2xl p-4 flex flex-col justify-center items-center"
          h1Style="text-lg font-bold"
        />
        <Reading
          reading={"This week's averages"}
          title={"20 \u00B0 C | 44%"}
          divStyle="border border-black rounded-2xl p-4 flex flex-col justify-center items-center"
          h1Style="text-lg font-bold"
        />
        <Reading
          reading={"This month's averages"}
          title={"20 \u00B0 C | 44%"}
          divStyle="border border-black rounded-2xl p-4 flex flex-col justify-center items-center"
          h1Style="text-lg font-bold"
        />
      </div>
    </main>
  );
};

export default Home;
