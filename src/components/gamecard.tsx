export const GameCard = ({
  title,
  imgSrc,
}: {
  title: string,
  imgSrc: string,
}) => {
  return (
    <div
      className="relative outlined outline-offset-0 rounded-lg w-[200px] h-[200px] transition-all group hover:w-[250px] hover:h-[250px]"
      style={{
        backgroundImage: `url("${imgSrc}")`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="group-hover:opacity-100 opacity-0 transition-all text-secondary bg-primary/90 bottom-0 absolute w-full p-4 rounded-b-lg">
        {title}
      </div>
    </div>
  );
}
