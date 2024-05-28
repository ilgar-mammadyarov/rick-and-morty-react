import { CharacterResultApiDto } from "../models";

export default function Card({
  character,
}: {
  character: CharacterResultApiDto;
}) {
  const getStatusColor = (status: string): string => {
    const classes = "h-2.5 w-2.5 rounded-lg inline-block mr-2";
    if (status === "Alive") {
      return `${classes} bg-[--bg-success]`;
    } else if (status === "Dead") {
      return `${classes} bg-[--bg-error]`;
    } else {
      return `${classes} bg-[--orange-01]`;
    }
  };

  return (
    <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row sm:max-w-card sm:w-card mx-auto">
      <div className=" max-h-56 overflow-hidden">
        <img src={character.image} alt="Card image" className="w-full" />
      </div>
      <div className=" p-3 bg-[--bg-black-02] w-full">
        <h3 className="text-white hover:text-[--orange-01] text-2xl font-bold">
          {character.name}
        </h3>
        <div className="text-white text-base font-medium pb-3">
          <span className={getStatusColor(character.status)}></span>
          <span>{character.status}</span> -<span>{character.species}</span>
        </div>

        <p className="text-[--text-black-02] text-base font-medium">
          Last known location:
        </p>
        <p className="text-white hover:text-[--orange-01] text-base font-light pb-3">
          {character.location.name}
        </p>

        <p className="text-[--text-black-02] text-base font-medium">
          First seen in:
        </p>
        <p className="text-white hover:text-[--orange-01] text-base font-light">
          {character.origin.name}
        </p>
      </div>
    </div>
  );
}
