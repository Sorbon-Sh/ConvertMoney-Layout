import { useState } from "react";
import { useConverter } from "../Logic/useConverter";
import arrovUp from "../assets/arrow-up.svg";
import arrovDown from "../assets/arrow-down.svg";

const ListItemOut = () => {
  const someCotergory = ["TAJ", "USD", "UER", "RUB"];

  const [openList, setOpenList] = useState<boolean>(false);

  const { listConvertEnter } = useConverter();

  return (
    <>
      <ul className="dinamic__list-items flex text-center ">
        {someCotergory.map((list, index) => (
          <li
            key={index}
            onClick={() => listConvertEnter(list)}
            className="hover:bg-green-500 hover:text-white  py-2 w-full cursor-pointer rounded-md bg-blue-500"
          >
            {list}
          </li>
        ))}
        <li
          className={`py-2 w-full flex justify-center cursor-pointer hover:bg-green-500 rounded-md bg-blue-500  ${
            openList && "bg-green-400"
          }`}
          onClick={() => setOpenList(!openList)}
        >
          <img src={openList ? arrovUp : arrovDown} className="h-6" />
        </li>
      </ul>
    </>
  );
};

export default ListItemOut;
