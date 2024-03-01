import { Switch } from "@mui/material";

const Table1 = () => {
  return (
    <>
      <table className="min-w-[450px] w-[500px] table-auto -ml-24">
        <thead className="text-gray-600 text-sm font-light flex flex-col w-full">
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal items-center p-3 flex justify-between">
            <th className="py-3 px-6 text-left">Enabled</th>
            <th colSpan="2" className="py-3 text-left">
              BackWash Time
              <div className="flex justify-center">
                <div className="pr-2">Min</div>
              </div>
            </th>
            <th colSpan="2" className="py-3 text-lef t">
              Rinse Time
              <div className="flex justify-center">
                <div className="pr-2">Min</div>
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
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100 flex justify-between">
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
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100 flex justify-between">
            <td className="py-3 px-6 text-center whitespace-nowrap flex gap-5 items-center">
              <h2 className="h-6 w-6 bg-yellow-300 rounded-full text-md font-semibold items-center">
                3
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
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100 flex justify-between">
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
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table1;
