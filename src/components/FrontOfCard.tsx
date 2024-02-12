import { useState } from "react";
import Api from "./Api";

const FrontOfCard = () => {
  const [apiData, setApiData] = useState<any>([]);

  return (
    <>
      <Api setData={setApiData} />
      <div className="grid grid-cols-3 gap-4 ">
        {apiData.map((article: any) => (
          <div
            key={article.title}
            className="card-container justify-items-center justify-center mb-12 "
          >
            <div className="relative">
              <p className="text-center font-semibold mb-6 text-color-900">
                {article.title}
              </p>
              <img src={article.urlToImage} alt={article.title} className="" />
              <div className="text-overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-0 hover:opacity-100">
                {article.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FrontOfCard;
