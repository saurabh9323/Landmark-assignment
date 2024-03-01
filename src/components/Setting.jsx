import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Switch } from "@mui/material";
import Table from "./Table";
import Table1 from "./Table1";
import Table2 from "./Table2";

const options = ["Flow Based", "Sewage Flow"];

const Setting = () => {
  return (
    <div className="mb-10 flex-col m-8 flex justify-center items-center">
      <div className="w-[700px] h-full min-h-screen flex flex-col border-4 border-gray-400 gap-4 justify-center items-center p-16 pt-24 relative ">
        <h1 className="font-bold text-lg absolute left-8 top-5">
          Filtered System
        </h1>
        <div className="overflow-x-auto ">
          <h4 className="font-semibold text-lg absolute left-8 top-16 ">
            Filtered Feed Pumps
          </h4>
          <Table />

          <div className="flex gap-4 items-cente ml-3 mt-5">
            <div className="flex items-cente gap-2">
              <h3 className="mt-[4px] font-semibold">On For:</h3>
              <input
                type="number"
                className="w-16 p-1 border-2 border-gray-300 rounded-lg"
              />
              <h3 className="mt-[4px]">mins</h3>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Off For:</h3>
              <input
                type="number"
                className="w-16 p-1 border-2 border-gray-300 rounded-lg"
              />
              <h3>mins</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4 mb-4 items-center ml-[-358px]">
          <h2 className="font-semibold">Filter Feed Tank Sensor :</h2>
          <Switch />
        </div>
        <div className="flex gap-2 items-center  ml-[-306px]">
          <h2 className="font-semibold text pt-1">Regenration:</h2>
          <Autocomplete
            id="controllable-states-demo"
            className="mt-4 mb-2"
            options={options}
            sx={{
              width: 200,
              "& .MuiInputBase-root": {
                height: "40px",
                borderRadius: "10px", // This will make it rounded-lg
                display: "flex",
                alignItems: "center", // Vertical center alignment
                textAlign: "center",
                justifyContent: "center",
                justifyItems: "center",
              },
              "& .MuiAutocomplete-inputRoot": {
                flexGrow: 1, // To allow the input to grow
              },
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <h1 className="font-semibold text-lg ml-[-550px]">MPVs</h1>
        <Table1 />
        <h1 className="font-semibold text-lg ml-[-480px] mt-6 -mb-6">
          Pressure Gauge
        </h1>
        <Table2 />
      </div>
    </div>
  );
};

export default Setting;
