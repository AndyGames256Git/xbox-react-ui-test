import {
  Library,
  Search,
  Settings,
  AppWindow,
  Gamepad,
  Mic,
  BatteryMedium
} from "lucide-react";

import profileLogo from "@/assets/react.svg";

import { formatHour } from "@/lib/utils";

import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const TopBar = () => {
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
      <div className="flex items-center text-secondary space-x-8 [&>div]:bg-primary/50 [&>div]:p-2 [&>div]:rounded-full">
        <div>
          <Library />
        </div>
        <div>
          <AppWindow />
        </div>
        <div>
          <Gamepad />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Settings />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div>
          <Mic />
        </div>
        <div>
          <BatteryMedium />
        </div>
        <div>
          {formatHour(new Date())}
        </div>
      </div>
    </div>
  );
}
