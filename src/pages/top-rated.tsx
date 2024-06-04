import { createSearchParams, useNavigate } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Navbar from "../components/navbar";

const TopRatedParks = () => {
  const navigate = useNavigate();
  const onCardClick = (parkCode: string) => {
    navigate({
      pathname: "/park",
      search: createSearchParams({
        parkCode: parkCode,
      }).toString(),
    });
  };
  const images = [
    "src/assets/greatsmoky.jpg",
    "src/assets/grand-canyon.png",
    "src/assets/zion.png",
    "src/assets/yellowstone.jpg",
    "src/assets/rocky.jpeg",
    "src/assets/yosemite.jpg",
    "src/assets/acadia.jpg",
    "src/assets/grand-teton.jpg",
    "src/assets/joshua.jpg",
    "src/assets/olympic.jpg",
    "src/assets/death-valley.jpg",
    "src/assets/glacier.jpg",
    "src/assets/bryce.jpg",
    "src/assets/canyonlands.jpg",
  ];
  const topParks = [
    {
      name: "Great Smoky Mountains National Park",
      code: "grsm",
      image: images[0],
    },
    {
      name: "Grand Canyon National Park",
      code: "grca",
      image: images[1],
    },
    {
      name: "Zion National Park",
      code: "zion",
      image: images[2],
    },
    {
      name: "Yellowstone National Park",
      code: "yell",
      image: images[3],
    },
    {
      name: "Rocky Mountain National Park",
      code: "romo",
      image: images[4],
    },
    {
      name: "Yosemite National Park",
      code: "yose",
      image: images[5],
    },
    {
      name: "Acadia National Park",
      code: "acad",
      image: images[6],
    },
    {
      name: "Grand Teton National Park",
      code: "grte",
      image: images[7],
    },
    {
      name: "Joshua Tree National Park",
      code: "jotr",
      image: images[8],
    },
    {
      name: "Olympic National Park",
      code: "olym",
      image: images[9],
    },
    {
      name: "Death Valley National Park",
      code: "deva",
      image: images[10],
    },
    {
      name: "Glacier National Park",
      code: "glac",
      image: images[11],
    },
    {
      name: "Bryce Canyon National Park",
      code: "brca",
      image: images[12],
    },
    {
      name: "Canyonlands National Park",
      code: "cany",
      image: images[13],
    },
  ];
  return (
    <>
      <Navbar />
      <section className="z-20 mx-auto mt-10 sm:mt-10 text-black dark:text-white">
        <h1 className="text-5xl font-body text-center">
          Most Visited U.S. National Parks
        </h1>
        <div
          className="grid gap-x-16
            grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
        >
          {topParks.map((park, index) => (
            <CardContainer key={index}>
              <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl
          dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
           border-black/[0.1] w-[30rem] sm:w-[25rem] min-h-[25rem] rounded-xl p-6 border  "
              >
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-neutral-600 dark:text-white"
                >
                  {park.name}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={park.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-5">
                  <CardItem
                    translateZ={20}
                    as="button"
                    onClick={() => onCardClick(park.code)}
                    className="px-4 py-2 rounded-xl bg-black
                dark:bg-white dark:text-black text-white text-lg font-bold"
                  >
                    Learn more
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopRatedParks;
