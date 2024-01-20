import { IoIosConstruct } from "react-icons/io";

export default function UnderConstruction() {
  return (
    <div className="flex w-full pt-64 justify-center items-center">
      <div>
        <IoIosConstruct className="w-60 h-60 mx-auto text-gray-400" />
        <h1 className="title-large text-gray-400 mx-auto">
          Under Construction
        </h1>
      </div>
    </div>
  );
}
