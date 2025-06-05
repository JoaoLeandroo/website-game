import Image from "next/image";
import Link from "next/link";
interface CardProps {
  href: string;
  altImg: string;
  title: string;
  button: string;
  urlButton: string;
}

const CardClassesStyle = ({
  href,
  altImg,
  title,
  button,
  urlButton,
}: CardProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-y-2 max-w-[420px] h-[280px] overflow-hidden rounded shadow bg-zinc-300 relative">
      <span className={`font-bungee absolute font-bold top-5 left-2 z-10 text drop-shadow-primary text-white text-xl select-none`}>
        {title}
      </span>
      <Image
        src={href}
        width={400}
        height={100}
        alt={altImg}
        className="opacity-90 w-full object-contain absolute select-none"
      />
      <Link
        href={urlButton}
        className="absolute bottom-0 cursor-custom-hand transition duration-200 font-semibold hover:bg-yellow-100 h-14 flex items-center justify-center w-full bg-yellow-200 text-black"
      >
        {button}
      </Link>
    </div>
  );
};

export default CardClassesStyle;
