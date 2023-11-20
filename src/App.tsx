import "@/App.css";

import { GameCards } from "@/components/gamecards";
import { TopBar } from "@/components/topbar";

function App() {
  return (
    <div
      className="container py-4"
    >
      <TopBar />
      <div className="h-[300px]"/>
      <GameCards />
    </div>
  );
}

export default App;
