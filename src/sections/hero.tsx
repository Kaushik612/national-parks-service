import Explore from "../pages/Explore";

const Hero = () => {
  return (
    <main className="w-full min-h-screen">
      <div
        className="w-full relative flex justify-center
    items-start mx-auto mt-10 text-black dark:text-white"
      >
        <div
          className="text-center p-4 flex justify-center items-center
        flex-col pb-[100px] space-y-8"
        >
          <h1 className="margin-0 text-6xl">
            Explore America's National Parks
          </h1>
          <Explore />
        </div>
      </div>
    </main>
  );
};

export default Hero;
