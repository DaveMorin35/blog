import React, { useState } from "react";
import FrontOfCard from "../components/FrontOfCard";
import Api from "../components/Api";

const Home: React.FC = () => {
  const [apiData, setApiData] = useState<any>([]);

  return (
    <>
    <div className="bg-slate-100 px-6">
    <Api setData={setApiData} />
      <div className="flex justify-center">
        <h2 className="text-7xl font-Bahianita mt-6">Breaking news</h2>
      </div>

      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 " />
  
      <div className="grid grid-cols-3 gap-4 ">
        {apiData.map((data:any) => (
        <FrontOfCard 
        key={data.index}
        imageUrl={data.urlToImage}
        description={data.description}
        name={data.name}
        title={data.title}
        />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
