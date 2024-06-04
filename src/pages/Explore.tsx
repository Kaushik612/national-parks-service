import { useState } from "react";
import { states } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";
import { getParksByStateCodeAndQuery } from "../api/api";
import { ParkCard } from "../components/parkcard";
import { BounceLoader } from "react-spinners";
import Mountains from "../components/mountains";

const Explore = () => {
  const [selectedState, setSelectedState] = useState("");
  const [searchParam, setSearchParam] = useState("");

  const { data, refetch, isError, error, isLoading } = useQuery({
    queryKey: ["productByStateAndParam", selectedState, searchParam],
    queryFn: () => getParksByStateCodeAndQuery(selectedState, searchParam),
    enabled: false,
  });
  return (
    <>
      {/* <Navbar /> */}
      <section className="z-10 mx-auto mt-10 sm:mt-10">
        <div
          className="p-8 flex w-[90%] sm:w-full max-w-[800px] bg-[#faf8f8] my-auto
  mx-auto shadow-md flex-col justify-start items-start sm:flex-row sm:justify-center sm:items-center gap-6 
  rounded-md font-content text-black dark:text-white"
        >
          <select
            className="w-full text-sm sm:text-lg h-full border-none outline-none rounded-md 
            py-3 px-5 text-black
      shadow-search transition-all duration-300 ease-in"
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {states.map((state, index) => (
              <option key={index} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          <span className="text-black font-bold ml-[50%] sm:ml-0">OR</span>
          <input
            className="text-black text-lg font-bold border-0 w-full h-full py-4 px-6 bg-white
      rounded-md shadow-search transition-all duration-300 ease-in focus:outline-none
       focus:shadow-search-focus placeholder:text-sm sm:placeholder:text-lg
      "
            type="search"
            placeholder="Search by a park name..."
            onChange={(e) => setSearchParam(e.target.value)}
          ></input>
          <button
            disabled={searchParam == "" && selectedState == ""}
            onClick={() => refetch()}
            className="text-white cursor-pointer p-4 font-bold text-sm sm:text-lg
        bg-[#1d3319] hover:bg-green-900
        transition-all ease-out duration-150 font-content rounded-md w-full sm:w-fit"
          >
            Search
          </button>
        </div>
      </section>
      {data ? (
        <>
          <h1 className="text-center font-extrabold text-xl">
            {searchParam
              ? "Displaying search results for " +
                selectedState +
                "AND/OR " +
                searchParam
              : "Displaying search results for " + selectedState}
          </h1>
          <div
            className="grid gap-x-16 px-16
            grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
          >
            {data.data.map((park, index) => (
              <ParkCard key={index} park={park} />
            ))}
          </div>
        </>
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : isLoading ? (
        <div className="flex mx-auto my-auto justify-center">
          <BounceLoader size={100} color="#1d3319" />
        </div>
      ) : (
        <Mountains />
      )}
    </>
  );
};

export default Explore;
