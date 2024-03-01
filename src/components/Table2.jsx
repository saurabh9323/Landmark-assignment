import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Table2 = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (showSuccessMessage) {
      timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showSuccessMessage]);

  const handleSaveChanges = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate("/");
    }, 1000);
  };
  return (
    <>
      <table className="min-w-[450px] w-[300px] table-auto mt-10 relative mb-10 h-[500px]">
        <thead className="text-gray-600 text-sm font-light flex flex-col w-full">
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal items-center p-3 flex justify-between">
            <th className="py-3 px-6 text-left">Enabled?</th>
            <th className="py-3 px-6 text-left">Enabled?</th>

            <th
              colSpan="2"
              className="py-3 text-left flex justify-center flex-col items-center"
            >
              Pressure Range (Bar)
              <div className="flex justify-center gap-3">
                <div className="pr-2">Normal</div>
                <div className="pr-2">High</div>
                <div className="pr-2">High High</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light flex flex-col w-full">
          <tr className="border-b border-gray-200 hover:bg-gray-100 flex justify-between">
            <td className="py-3 px-6 text-center whitespace-nowrap flex gap-5 items-center">
              <h2 className="h-6 w-6 bg-yellow-300 rounded-full text-md font-semibold items-center">
                1
              </h2>
              <Switch />
            </td>
            <td className="py-3 px-6 text-center whitespace-nowrap flex gap-5 items-center">
              <h2 className="h-6 w-6 bg-yellow-300 rounded-full text-md font-semibold items-center">
                2
              </h2>
              <Switch />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="10"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>

            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="20"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>

            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="30"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100 flex justify-between">
            <td className="py-3 px-6 text-center whitespace-nowrap flex gap-5 items-center">
              <h2 className="h-6 w-6 bg-yellow-300 rounded-full text-md font-semibold items-center">
                3
              </h2>
              <Switch />
            </td>
            <td className="py-3 px-6 text-center whitespace-nowrap flex gap-5 items-center">
              <h2 className="h-6 w-6 bg-yellow-300 rounded-full text-md font-semibold items-center">
                4
              </h2>
              <Switch />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="10"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>

            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="20"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>

            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="30"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100 flex justify-between">
            <td className="py-3 px-6 text-center whitespace-nowrap flex gap-5 items-center">
              <h2 className="h-6 w-6 bg-yellow-300 rounded-full text-md font-semibold items-center">
                5
              </h2>
              <Switch />
            </td>
            <td className="py-3 px-6 text-center whitespace-nowrap flex gap-5 items-center">
              <h2 className="h-6 w-6 bg-yellow-300 rounded-full text-md font-semibold items-center">
                6
              </h2>
              <Switch />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="10"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>

            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="20"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>

            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="30"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100 flex justify-between">
            <td className="py-3 px-6 text-center whitespace-nowrap flex gap-5 items-center">
              <h2 className="h-6 w-6 bg-yellow-300 rounded-full text-md font-semibold items-center">
                7
              </h2>
              <Switch />
            </td>
            <td className="py-3 px-6 text-center whitespace-nowrap flex gap-5 items-center">
              <h2 className="h-6 w-6 bg-yellow-300 rounded-full text-md font-semibold items-center">
                8
              </h2>
              <Switch />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="10"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>

            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="20"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>

            <td className="py-3 px-3 text-center">
              <input
                type="number"
                placeholder="30"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
          </tr>
        </tbody>
        <div className="flex gap-5 mt-10 absolute right-4  ">
          {showSuccessMessage && (
            <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md">
              Data saved successfully!
            </div>
          )}
          <div className="flex gap-5 mt-10 absolute right-4">
            <button
              className="w-32 h-8 rounded-md text-white mb-8 pb-7 bg-[#62afe3] text-center"
              onClick={handleSaveChanges}
            >
              Save Change
            </button>
            <Link
              className="w-24 h-8 border-2 border-black rounded-md mb-6 text-center"
              to={"/"}
            >
              Cancel
            </Link>
          </div>
        </div>
      </table>
    </>
  );
};

export default Table2;
