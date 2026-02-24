
interface CardProps {
  image: string;
  flipped: boolean;
  disabled: boolean;
  onClick: () => void;
}

export default function Card({ image, flipped, disabled, onClick }: CardProps) {
  return (
    <div
      className="w-full aspect-square cursor-pointer"
      onClick={() => !disabled && onClick()}
    >
      <div
        className={`relative w-full h-full transform-style-preserve-3d duration-300 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute inset-0 bg-indigo-700 rounded-xl flex items-center justify-center backface-hidden">
          <span className="text-xl font-bold">?</span>
        </div>
        <img
          src={image}
          className="absolute inset-0 w-full h-full object-cover rounded-xl backface-hidden rotate-y-180"
        />
        
      </div>

    </div>
  );
}
