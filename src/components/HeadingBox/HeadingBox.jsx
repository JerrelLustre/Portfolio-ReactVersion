;
import charIcon from "../../assets/svg/est.svg";

export default function HeadingBox({ text }) {
  return (
    <div className="border-white border-2 rounded-tr-lg w-fit p-2 relative mb-2 text-black">
      <div className=" bg-white border-l-[1.25rem] rounded-tr-lg border-highlight text-lg md:text-3xl font-oswald max-w-lg py-2 pr-3 pl-6 md:py-3 md:pr-5 md:pl-10">
        {text}
        <img
          src={charIcon}
          aria-hidden="true"
          className=" w-16 md:w-20 absolute -bottom-2 -left-4"
        ></img>
      </div>
    </div>
  );
}
