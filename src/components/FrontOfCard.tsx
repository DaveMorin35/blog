import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface FrontOfCardProps {
  imageUrl: string;
  description: string;
  name: string;
  title: string;
}

const FrontOfCard: React.FC<FrontOfCardProps> = ({
  imageUrl,
  description,
  name,
  title,
}) => {
  const [isflipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div>
      <h2 className="text-center font-semibold mb-6 text-sm">{title}</h2>
      <div className="mx-auto mb-12" style={{ width: "400px"}}>
        <ReactCardFlip isFlipped={isflipped} flipDirection="horizontal">
          <div
            className="cursor-pointer flex justify-center items-center"
            onClick={() => setIsFlipped(!isflipped)}
          >
            <img className="rounded-xl" src={imageUrl} alt={name} />
          </div>
          <div
            className="cursor-pointer bg-slate-150 shadow-2xl rounded-lg px-8 py-4 text-left max-w-md"
            onClick={() => setIsFlipped(!isflipped)}
          >
            <p className="text-center">{description}</p>
          </div>
        </ReactCardFlip>
      </div>
      </div>
  );
};

export default FrontOfCard;
