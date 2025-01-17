export default function ButtonFeed({ style }) {
  return (
    <button
      className={`${style} px-8 py-3 text-[18px] text-white uppercase bg-orange rounded-xl cursor-pointer hover:bg-orange-dark animate-simple`}
    >
      Записаться
    </button>
  );
}
