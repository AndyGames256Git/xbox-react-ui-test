import { useEffect, useState } from "react";
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

import { profile } from "@/data/profile";

import { formatHour } from "@/lib/utils";

import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const TopBar = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
  });

  return (
    <div className="flex items-center justify-between text-secondary mb-[280px]">

      <div className="flex items-center space-x-2">
        <Avatar className="h-12 w-12">
          <AvatarImage
            className="bg-primary"
            src={profile.profilePictureSrc}
          />
        </Avatar>
        <div>
          <div className="flex items-center space-x-2">
            <div className="text-lg">
              {profile.gamertag}
            </div>
            {
              profile.hasGamePass
              &&
              <Badge className="rounded-none p-0 px-1 font-bold" variant="secondary">
                ULTIMATE
              </Badge>
            }
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">
              G
            </Badge>
            <div>
              {profile.points}
            </div>
          </div>
        </div>
      </div>

      <div>
        <nav className="flex items-center text-secondary space-x-8 [&>a]:bg-primary/50 [&>a]:p-3 [&>a]:rounded-full">
          <a className="outlined" href="/">
            <Library />
          </a>
          <a className="outlined" href="/">
            <AppWindow />
          </a>
          <a className="outlined" href="/">
            <Gamepad />
          </a>
          <a className="outlined" href="/">
            <Search />
          </a>
          <a className="outlined" href="/">
            <Settings />
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4 [&>div]:cursor-pointer">
        <div
          onClick={() => setIsMuted((isMuted) => !isMuted)}
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
