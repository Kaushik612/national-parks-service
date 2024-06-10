import { useEffect, useLayoutEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAlertsByParkCode, getParkByParkCode } from "../api/api";
import AlertsContainer from "../components/alerts-container";
import Navbar from "../components/navbar";

const ParkDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const parkCode = searchParams.get("parkCode") || "";
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useQuery({
    queryKey: ["alertsByParkCode", parkCode],
    queryFn: () => getAlertsByParkCode(parkCode),
    enabled: true,
  });

  const { data: parkResponse } = useQuery({
    queryKey: ["parkByParkCode", parkCode],
    queryFn: () => getParkByParkCode(parkCode),
    enabled: true,
  });

  useEffect(() => {
    if (parkCode === null || parkCode === "") {
      return navigate("/");
    }
  });

  const park = parkResponse?.data[0];
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[700px] overflow-hidden relative bg-black flex items-center">
        <img
          className="w-full min-h-full opacity-[0.7] bottom-0 absolute align-middle border-none"
          src={park?.images[0].url}
        />
        <div className="text-center z-10 top-0 ml-auto mr-auto left-0 right-0 pb-8">
          <h1
            className="text-6xl font-bold text-white tracking-widest mb-[0.5rem] leading-normal
            lg:leading-6"
          >
            {park?.fullName}
          </h1>
        </div>
      </div>
      <div
        className="relative w-full text-black bg-[#faf8f8] p-8 
        z-999 max-w-[1300px] shadow-md 
      rounded-md mx-auto my-[-3rem]"
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:flex-wrap w-full">
          <div
            className="flex flex-col flex-1 border-r-none lg:border-r-2 lg:border-r-[#ddd] pl-8 pr-8 justify-center items-center
           last:border-none last:items-stretch"
          >
            <p className="uppercase font-bold text-lg">Location</p>
            <span className="font-content">
              {park?.addresses[0].city}, {park?.addresses[0].stateCode}
            </span>
          </div>
          <div
            className="flex flex-col flex-1 border-r-none lg:border-r-2 lg:border-r-[#ddd] pl-8 pr-8 justify-center items-center
           last:border-none last:items-stretch"
          >
            <p className="uppercase font-bold text-lg">Email</p>
            <span className="font-content">
              {park?.contacts.emailAddresses[0].emailAddress}
            </span>
          </div>
          <div
            className="flex flex-col flex-1 border-r-none lg:border-r-2 lg:border-r-[#ddd] pl-8 pr-8 justify-center items-center
           last:border-none last:items-stretch"
          >
            <p className="uppercase font-bold text-lg">Phone</p>
            <span className="font-content">
              {park?.contacts.phoneNumbers[0].phoneNumber}
            </span>
          </div>
          <div
            className="flex flex-col flex-1 border-r-2 border-r-[#ddd] pl-8 pr-8 justify-center items-center
           last:border-none last:items-stretch"
          >
            <Link
              to={park?.url || "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="text-white cursor-pointer p-4 font-bold text-xl
           bg-[#1d3319] hover:bg-green-900
           transition-all ease-out duration-150 font-content"
                style={{ width: "100%" }}
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Alerts section starts */}
      <section
        className="max-w-[1300px] pt-[8rem] mx-auto my-auto text-black dark:text-white flex flex-col
      font-content gap-8 px-8 lg:px-0"
      >
        <h1 className="font-bold text-5xl font-body">Alerts</h1>
        <AlertsContainer alerts={data} />
      </section>

      {/* Overview section starts */}
      <section
        className="max-w-[1300px] pt-[8rem] pb-[20rem]
      text-black dark:text-white mx-auto my-auto flex flex-col gap-32 
      px-8 lg:px-0"
      >
        <div className="grid relative grid-cols-1 gap-8">
          <h1 className="font-bold text-5xl col-span-1">Overview</h1>
          <div className="text-lg leading-8 col-end-2 font-content">
            {park?.description}
          </div>
        </div>
        <div className="grid relative grid-cols-1 gap-8">
          <h1 className="font-bold text-5xl col-span-1">Climate</h1>
          <div className="text-lg leading-8 col-end-2 font-content">
            {park?.weatherInfo}
          </div>
        </div>
      </section>

      {/* Activites section starts */}
      <section
        className="pt-[10rem] pb-[10rem] w-full
      bg-black dark:bg-white text-white dark:text-black
      px-8 lg:px-0"
      >
        <div className="container mx-auto my-auto">
          <div className="flex flex-wrap mb-[6rem]">
            <div
              className="flex lg:flex-grow-0 lg:flex-shrink-0
            lg:basis-6/12"
            >
              <div className="mt-[-15rem] overflow-hidden max-h-[600px]">
                <img
                  className="w-full h-full lg:w-[600px] lg:h-[350px]"
                  src={
                    park?.images?.length || 0 > 1
                      ? park?.images[1].url
                      : park?.images[0].url
                  }
                />
              </div>
            </div>

            <div
              className="flex flex-col gap-6 lg:flex-grow-0 lg:flex-shrink-0
            lg:basis-5/12"
            >
              <h1 className="text-5xl mt-5 lg:mt-0">Activities</h1>
              <span className="text-xl uppercase text-gray-400">
                Things to Do
              </span>
              <div className="font-content tracking-widest">
                {park?.activities.map((activity) => activity.name).join(",")}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div
              className="flex flex-col gap-6 lg:flex-grow-0 lg:flex-shrink-0
            lg:basis-5/12"
            >
              <h1 className="text-5xl">Topics</h1>
              <span className="text-xl uppercase text-gray-400">
                Things to Learn
              </span>
              <div className="font-content tracking-widest">
                {park?.topics.map((topic) => topic.name).join(",")}
              </div>
            </div>
            <div
              className="flex lg:flex-grow-0 lg:flex-shrink-0
            lg:basis-6/12"
            >
              <div className="mt-5 lg:mt-0 overflow-hidden max-h-[600px] px-0 lg:px-24">
                <img
                  className="w-full h-full lg:w-[600px] lg:h-[350px]"
                  src={
                    park?.images?.length || 0 > 2
                      ? park?.images[2].url
                      : park?.images[0].url
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direction section starts */}
      <section
        className="mb-32 w-full mt-[-5rem]
      px-8 lg:px-0"
      >
        <div
          className=" w-full text-black bg-[#faf8f8] p-8
           lg:max-w-[1300px] shadow-md 
      rounded-md mx-auto"
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl text-gray-500">Directions</h1>
            <p className="text-lg tracking-wider font-content">
              {park?.directionsInfo}
            </p>
            <Link
              to={park?.directionsUrl || "/"}
              className="underline text-xl font-content"
            >
              View more information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParkDetailsPage;
