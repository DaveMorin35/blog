import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface FrontOfCardProps {
  imageUrl: string;
  description: string;
  name: string;
  title: string;
}

const CardStyle = {
  padding: "20px",
  margin: "20px",
  width: "400px",
  height: "250px",
};

const FrontOfCard: React.FC<FrontOfCardProps> = ({
  imageUrl,
  description,
  name,
  title,
}) => {
  const [isflipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div className="cursor-pointer">
      <h2 className="text-center font-semibold mb-6 text-sm text-font">
        {title}
      </h2>
      <div>
        <ReactCardFlip isFlipped={isflipped} flipDirection="horizontal">
          <div
            onClick={() => setIsFlipped(!isflipped)}
            style={CardStyle}
          >
            <img className="w-full h-full object-cover rounded-lg" src={imageUrl} alt={name} />
          </div>
          <div     
            onClick={() => setIsFlipped(!isflipped)}
            className=""
          >
            <p className="text-center pt-20">{description}</p>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default FrontOfCard;
