import { princips } from "@/public/data/data";

export default function Princips() {
  return (
    <ul className="mt-8 sm:mr-[71px] flex flex-col gap-6">
      {princips.map(({ id, number, text }) => {
        return (
          <li
            key={id}
            className="h-[48px] sm:h-[77px] flex gap-[22px] items-center"
          >
            <p className="w-[53px] sm:w-[88px] font-display font-normal text-[40px] sm:text-[64px] text-orange">
              {number}
            </p>
            <h4 className="-mt-1 leading-6">{text}</h4>
          </li>
        );
      })}
    </ul>
  );
}
