/* eslint-disable react/jsx-key */
// Card2.jsx
import { useState } from "react";
import Switch from "@mui/material/Switch";
import jsonData from "./Dummy.json";
import Cross from "./Cross";
import CheckCircle from "./CheckCircle";
import { useNavigate } from "react-router-dom";

const Two = () => {
  return (
    <div>
      <h1 className="text-green-500 text-lg font-bold">2</h1>
    </div>
  );
};

const sign = [<Cross />, <CheckCircle />, <Two />];

const Card2 = () => {
  const navigate = useNavigate();
  const [switchStates, setSwitchStates] = useState(
    Array(jsonData.length).fill(false)
  );
  const handleClick = () => {
    navigate("/setting");
  };

  const handleChange = (index) => {
    setSwitchStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <div className="mt-5 mx-7">
      <h1>DISSINFECTION</h1>

      <div className="flex flex-wrap justify-start gap-4 mt-4 ">
        {jsonData.map((section, index) => (
          <div
            key={index}
            className="border-2 w-[240px] border-[#f9e79f] rounded-lg h-fit mt-4"
            onClick={handleClick}
          >
            <div className="flex justify-between items-center bg-[#fbf4cf] p-1 text-lg uppercase font-bold ">
              <h2>{section.mainTitle}</h2>
              <Switch
                checked={switchStates[index]}
                onChange={() => handleChange(index)}
                color="success"
                sx={{
                  "& .MuiSwitch-thumb": {
                    color: "#fff",
                  },
                  "& .Mui-checked": {
                    color: "#4caf50",
                  },
                }}
              />
            </div>
            <div className="flex flex-wrap gap-2 bg-[#f9e79f] border-y-2 flex-col border-[#f9e79f]">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center h-[50px] justify-center mb-4 p-2 border-[#f9e79f] rounded-md cursor-pointer"
                  onClick={handleChange}
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

export default Card2;
