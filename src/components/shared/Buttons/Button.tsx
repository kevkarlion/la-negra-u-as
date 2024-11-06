// components/ButtonLink.tsx
import Link from "next/link";

interface ButtonLinkProps {
  text: string;
  href: string;
  bgColor?: string;
  textColor?: string;
  margin?: string;
  border?: string;
  borderColor? :string
  font?: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  text,
  href = "#",
  bgColor = "trasnparent",
  textColor = "text-white",
  margin='m-2',
  border='none',
  borderColor,
  font='font-subtitle'
}) => {
  return (
    <Link
      href={href}
      className={`${bgColor} ${textColor} ${margin} ${border} ${borderColor} ${font} w-[19rem] h-6 relative inline-block px-6 py-2 text-md font-semibold transition duration-300 ease-in-out rounded-lg shadow-lg overflow-hidden group fluid-bg`}
    >
      {/* Capa de brillo */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
    
      {/* Efecto de oscilación */}
      <span className="absolute inset-0 transition-transform duration-300 ease-in-out transform scale-100 group-hover:scale-110 group-hover:-translate-y-1 rounded-md bg-transparent"></span>
    
      {/* Texto del botón */}
      <span className="relative bottom-[8px] z-10">{text}</span>
    </Link>
  
  );
};
