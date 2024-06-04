import { createSearchParams, useNavigate } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import { ParkModel } from "../types/Park";

export function ParkCard({ park }: { park: ParkModel }) {
  const navigate = useNavigate();
  const onCardClick = (parkCode: string) => {
    navigate({
      pathname: "/park",
      search: createSearchParams({
        parkCode: parkCode,
      }).toString(),
    });
  };
  return (
    <CardContainer>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[25rem] sm:w-[25rem] min-h-[35rem] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          {park.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 font-content dark:text-neutral-300"
        >
          {park.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={park.images[0].url}
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
            onClick={() => onCardClick(park.parkCode)}
            className="px-4 py-2 rounded-xl bg-black
             dark:bg-white dark:text-black text-white text-lg font-bold"
          >
            Learn more
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
