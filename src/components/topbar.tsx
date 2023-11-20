import {
  Library,
  Search,
  Settings,
  AppWindow,
  Gamepad,
  Mic,
  BatteryMedium,
  MicOff
} from "lucide-react";

import profileLogo from "@/assets/react.svg";

import { formatHour } from "@/lib/utils";

import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export const TopBar = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
  });

  return (
    <div className="flex items-center justify-between text-secondary">

      <div className="flex items-center space-x-2">
        <Avatar className="h-12 w-12">
          <AvatarImage
            className="bg-primary"
            src={profileLogo}
          />
        </Avatar>
        <div>
          <div className="flex items-center space-x-2">
            <div className="text-lg">
              BackFoward
            </div>
            <Badge variant="secondary">
              ULTIMATE
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">
              G
            </Badge>
            <div>
              21,337
            </div>
          </div>
        </div>
      </div>

      <div>
        <nav className="flex items-center text-secondary space-x-8 [&>a]:bg-primary/50 [&>a]:p-2 [&>a]:rounded-full">
          <a className="border-transparent border-2 hover:border-solid hover:border-secondary" href="/">
            <Library />
          </a>
          <a className="border-transparent border-2 hover:border-solid hover:border-secondary" href="/">
            <AppWindow />
          </a>
          <a className="border-transparent border-2 hover:border-solid hover:border-secondary" href="/">
            <Gamepad />
          </a>
          <a className="border-transparent border-2 hover:border-solid hover:border-secondary" href="/">
            <Search />
          </a>
          <a className="border-transparent border-2 hover:border-solid hover:border-secondary" href="/">
            <Settings />
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4 [&>div]:cursor-pointer">
        <div
          onClick={(_e) => setIsMuted((isMuted) => !isMuted)}
        >
          {isMuted ? <MicOff /> : <Mic />}
        </div>
        <div>
          <BatteryMedium />
        </div>
        <div>
          {formatHour(date)}
        </div>
      </div>
      
    </div>
  );
}
