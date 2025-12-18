export default function ButtonFeed({ style }) {
  return (
    <button
      className={`${style} px-10 py-3 text-[18px] text-white uppercase rounded-xl cursor-pointer hover:bg-orange-dark animate-simple`}
    >
      <a href="tel:89182468877" target="_blank">
        Записаться
      </a>
    </button>
  );
}
