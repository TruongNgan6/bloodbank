"use client";

import { use, useState } from "react";
import { Nav } from "../ui/nav";
import { ChevronRight, HeartPulse, Inbox, UserRound } from "lucide-react";
import { Button } from "../ui/button";

import { useWindowWidth } from "@react-hook/window-size";

interface SidebarProps {}

export const SidebarDoctor = ({}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleSidbar() {
    setIsCollapsed(!isCollapsed);
  }

  const onlywidth = useWindowWidth();
  const mobileWidth = onlywidth < 768;

  return (
    <>
      <div className="relative min-y-[80px] border-r px-3 pb-10 pt-24">
        {!mobileWidth && (
          <div className="absolute right-[-20px] top-7">
            <Button
              onClick={toggleSidbar}
              variant="secondary"
              className="rounded-full p-2 "
            >
              <ChevronRight />
            </Button>
          </div>
        )}

        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
              title: "Blood Bank",
              href: "blood-bank",
              icon: HeartPulse,
              variant: "ghost",
            },
            {
              title: "Find Donors",
              href: "find-donors",
              icon: UserRound,
              variant: "ghost",
            },
          ]}
        />
      </div>
    </>
  );
};
