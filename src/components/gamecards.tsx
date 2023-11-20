import { GameCard } from "@/components/gamecard";

export const GameCards = () => {
  const games = [
    {
      title: 'Halo 5 Guardians',
      imgSrc: 'https://cdn.mobygames.com/covers/11143838-halo-infinite-campaign-windows-apps-front-cover.jpg',
    },
    {
      title: 'Diablo IV',
      imgSrc: 'https://cdn.mobygames.com/covers/17161000-diablo-iv-playstation-4-front-cover.png',
    },
    {
      title: 'Grand Theft Auto V',
      imgSrc: 'https://cdn.mobygames.com/covers/3482873-grand-theft-auto-v-xbox-one-front-cover.jpg',
    }
  ];
  return (
    <div className="flex space-x-4 items-end h-[286px]">
      {games.map((game, index) => (
        <GameCard
          key={index}
          title={game.title}
          imgSrc={game.imgSrc}
        />
      ))}
    </div>
  );
}
