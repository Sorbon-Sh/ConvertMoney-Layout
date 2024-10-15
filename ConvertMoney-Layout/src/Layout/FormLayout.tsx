import { useState } from "react";
import { useConverter } from "../Logic/useConverter";
import { useForm } from "react-hook-form";
import ListItems from "./ListItems";
import changeIcon from "../assets/changeIcon.svg";
import ListItemOut from "./ListItemOut";

const FormLayout = () => {
  interface FormData {
    enter: number;
    out: number;
  }
  const { register, handleSubmit } = useForm<FormData>();
  const [course, setCourse] = useState<number>(0);
  const [enter, setEnter] = useState<number>();
  const [out, setOut] = useState<number>();
  const [valueEnter, setValueEnter] = useState<number>();
  const [valueOut, setValueOut] = useState<number>();

  const { convert } = useConverter();

  const submit = (data: FormData) => {
    const courseMoney = convert(data.enter, data.out);

    setEnter(data.out);
    setOut(data.enter);

    setCourse(courseMoney);
  };

  const convertRevers = () => {
    setValueEnter(out);
    setValueOut(enter);
  };

  return (
    <>
      <form
        className="border-2 flex  justify-between items-center  w-full "
        onSubmit={handleSubmit(submit)}
      >
        <div className=" bg-white h-52 input__convert">
          <ListItems />
          <div className="border-2 bg-white  h-28 flex flex-col justify-center input__box">
            <input
              type="number"
              value={valueOut}
              placeholder="Enter"
              className="w-vw-32 py-4 text-2xl outline-none px-3"
              {...register("enter")}
            />
          </div>
          <div className="course__money font-medium">
            Course money: {course}
          </div>
        </div>
        <div className=" flex flex-col w-full h-full items-center  justify-end">
          <img
            src={changeIcon}
            alt=""
            className="w-12 h-12 cursor-pointer my-5 change__icon  "
            onClick={() => convertRevers()}
          />
          <button className="bg-blue-400 rounded-lg p-5  hover:bg-green-500 hover:text-white">
            Convert
          </button>
        </div>
        <div className=" bg-white h-52 input__convert">
          <ListItemOut />
          <div className="h-28 flex flex-col justify-center input__box bg-white">
            <input
              type="number"
              value={valueEnter}
              placeholder="Out"
              className="w-vw-32 py-4 text-2xl outline-none px-3"
              {...register("out")}
            />
          </div>
          <div className="course__money font-medium text-end">
            Course money: {course}
          </div>
        </div>
      </form>
    </>
  );
};

export default FormLayout;
