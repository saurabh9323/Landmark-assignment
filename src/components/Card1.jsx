/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router-dom";
import jsonData from "./Dummy.json";
import Cross from "./Cross";
import CheckCircle from "./CheckCircle";
const Two = () => {
  return (
    <div>
      <h1 className="text-green-500 text-lg font-bold">2</h1>
    </div>
  );
};

const Card1 = () => {
  const navigate = useNavigate();
  const sign = [<Cross />, <CheckCircle />, <Two />];
  const handleClick = () => {
    navigate("/setting");
  };

  return (
    <div>
      <div className="flex flex-wrap justify-start gap-4 mt-4 mx-7">
        {jsonData.map((section, index) => (
          <div
            key={index}
            onClick={handleClick}
            className="border-2 w-[240px] border-green-400 rounded-lg h-fit mt-4 cursor-pointer"
          >
            <h2 className="bg-[#e7f3dd] p-1 items-center flex justify-center text-lg uppercase font-bold">
              {section.mainTitle}
            </h2>
            <div className="flex flex-wrap gap-2 bg-[#d8efd4] border-y-2 flex-col border-green-400">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center h-[50px] w-full justify-center  gap-1 p-1 border-green-400 rounded-md"
                >
                  <h1 className="ml-[-34px]">
                    {typeof item.logo === "string" &&
                      !isNaN(parseInt(item.logo)) &&
                      parseInt(item.logo) >= 0 &&
                      parseInt(item.logo) < sign.length &&
                      sign[parseInt(item.logo)]}
                  </h1>
                  <div className="ml-2 w-[140px] flex flex-col ">
                    {item.title && (
                      <h3 className="flex flex-wrap">{item.title}</h3>
                    )}
                    {item.heading && (
                      <p className="flex flex-wrap">{item.heading}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;
