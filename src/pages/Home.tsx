import React, { useState } from "react";
import FrontOfCard from "../components/FrontOfCard";
import Api from "../components/Api";

const Home: React.FC = () => {
  const [apiData, setApiData] = useState<any>([]);

  return (
    <>
      <div className="bg-background px-6 flex flex-col">
        <Api setData={setApiData} />
        <div className="flex justify-center">
          <h2 className="text-7xl font-Bahianita mt-6 text-font">
            Breaking news
          </h2>
        </div>

        <hr className="my-12 h-px bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 " />

          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center">
             {apiData.map((data:any) => (
          <FrontOfCard 
        key={data.index}
        imageUrl={data.urlToImage}
        description={data.description}
        name={data.name}
        title={data.title.substring(0,50) +"..."}
        />
        ))}
          </div>
        </div>
    </>
  );
};

export default Home;
