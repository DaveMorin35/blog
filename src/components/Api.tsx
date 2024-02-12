import axios from "axios";
import { useEffect } from "react";

interface ApiProps {
    setData: (data: any[]) => void;
}

const Api: React.FC<ApiProps> = ({setData}) => {

  useEffect(() => {
    const fetchData = async () => {
      const ApiKey = "477d8963fdd842258e34e37f277f356d";

      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data.articles)
        console.log("Successful API call!", response);
      } catch (error) {
        console.log("Error with API call!", error);
      }
    };
    fetchData();
  }, [setData]);

  return <></>;
};

export default Api;
