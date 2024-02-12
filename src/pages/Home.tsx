import FrontOfCard from "../components/FrontOfCard";

const Home: React.FC = () => {
  return (
    <div className="bg-slate-100 px-6">
      <div className="flex justify-center">
        <h2 className="text-7xl font-Bahianita mt-6">Breaking news</h2>
      </div>

      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 " />
      <div className="rounded-2xl">
        <FrontOfCard />
      </div>
    </div>
  );
};

export default Home;
