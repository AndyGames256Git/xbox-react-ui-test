import {
  Gamepad2,
  Edit3,
} from "lucide-react";

import eliteController from "@/assets/elite-controller.webp";
import disneyBg from "@/assets/disney.webp";

export const MenuCards = () => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="relative border-4 border-hidden rounded-lg w-[350px] h-[220px] group hover:border-solid hover:border-secondary flex flex-col items-center justify-center bg-primary/80">
        <Gamepad2 className="w-12 h-12 text-secondary" />
        <div className="text-secondary bottom-0 absolute w-full p-4 rounded-b-lg">
          Browse your games
        </div>
      </div>
      <div className="relative border-4 border-hidden rounded-lg w-[350px] h-[220px] group hover:border-solid hover:border-secondary flex flex-col items-center justify-center bg-primary/80">
        <Edit3 className="w-12 h-12 text-secondary" />
        <div className="text-secondary bottom-0 absolute w-full p-4 rounded-b-lg">
          Customize your Home
        </div>
      </div>
      <div
        className="relative border-4 border-hidden rounded-lg w-[350px] h-[220px] group hover:border-solid hover:border-secondary"
        style={{
          backgroundImage: `url("${disneyBg}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-secondary bottom-0 absolute w-full p-4 rounded-b-lg">
          Disney +
        </div>
      </div>
      <div
        className="relative border-4 border-hidden rounded-lg w-[350px] h-[220px] group hover:border-solid hover:border-secondary"
        style={{
          backgroundImage: `url("${eliteController}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-secondary bottom-0 absolute w-full p-4 rounded-b-lg">
          Play at your peek
        </div>
      </div>
    </div>
  );
}
