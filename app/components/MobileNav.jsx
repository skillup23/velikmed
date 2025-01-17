import Link from 'next/link';

export default function MobileNav({ navLinks, isOpen }) {
  return (
    <div
      className={`${
        isOpen ? `translate-x-0` : `-translate-x-full`
      } flex lg:hidden absolute w-full h-dvh bg-orange p-8 top-[69px] sm:top-[93px] flex-col gap-10 animate-simple z-30`}
    >
      {navLinks.map(({ id, url, title }) => {
        return (
          <Link
            key={id}
            href={url}
            className="text-[20px] text-white uppercase font-medium tracking-wide hover:text-gray-light animate-simple"
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
}
