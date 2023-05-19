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
          title={"Today"}
          temp={"20"}
          hum={"44"}
          divStyle="rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={false}
          humUp={false}
        />
        <Reading
          title={"This week"}
          temp={"24"}
          hum={"50"}
          divStyle=" rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={true}
          humUp={false}
        />
        <Reading
          title={"This month"}
          temp={"23"}
          hum={"60"}
          divStyle="rounded-2xl p-4 grid grid-cols-4 bg-background"
          h1Style="text-lg font-bold"
          tempUp={true}
          humUp={true}
        />
      </div>
    </main>
  );
};

export default Home;
