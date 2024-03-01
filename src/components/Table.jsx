import { Switch } from "@mui/material";

const Table = () => {
  return (
    <>
      <table className="min-w-[450px] w-[500px] table-auto">
        <tbody className="text-gray-600 text-sm font-light flex flex-col w-full">
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal items-center p-3 flex justify-between">
            <th className="py-3 px-6 text-left">Enabled</th>
            <th colSpan="2" className="py-3  text-left">
              Current(A)
              <div className="flex justify-between">
                <div className="pr-2">DL</div>
                <div>OL</div>
              </div>
            </th>
            <th colSpan="2" className="py-3 px-6 text-left">
              Trip Time(Sec.)
              <div className="flex justify-between">
                <div className="pr-2">DR</div>
                <div>OL</div>
              </div>
            </th>
            <th className="py-3 px-6 text-left">Stop</th>
          </tr>
          <tr>
            <td className="py-3 px-6 text-center whitespace-nowrap">
              <Switch />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
            <td className="py-3 px-6 text-center whitespace-nowrap">
              <Switch />
            </td>
          </tr>
          <tr>
            <td className="py-3 px-6 text-center whitespace-nowrap">
              <Switch />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
              />
            </td>
            <td className="py-3 px-6 text-center whitespace-nowrap">
              <Switch />
            </td>
          </tr>{" "}
          <tr>
            <td className="py-3 px-6 text-center whitespace-nowrap">
              <Switch disabled />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
                disabled
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
                disabled
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
                disabled
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
                disabled
              />
            </td>
            <td className="py-3 px-6 text-center whitespace-nowrap">
              <Switch disabled />
            </td>
          </tr>
          <tr>
            <td className="py-3 px-6 text-center whitespace-nowrap">
              <Switch disabled />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
                disabled
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
                disabled
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
                disabled
              />
            </td>
            <td className="py-3 px-3 text-center">
              <input
                type="number"
                className="w-20 p-2 border-2 border-gray-300 rounded-lg"
                disabled
              />
            </td>
            <td className="py-3 px-6 text-center whitespace-nowrap">
              <Switch disabled />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
