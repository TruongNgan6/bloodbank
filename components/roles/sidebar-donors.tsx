"use client";

import { use, useState } from "react";
import { Nav } from "../ui/nav";
import { Badge, ChevronRight, Inbox, UserRound } from "lucide-react";
import { Button } from "../ui/button";

import { useWindowWidth } from "@react-hook/window-size";

interface SidebarProps {}

export const SidebarDonors = ({}: SidebarProps) => {
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
              title: "Donate",
              href: "donate",
              icon: UserRound,
              variant: "ghost",
            },
            {
              title: "History",
              href: "history",
              icon: Inbox,
              variant: "ghost",
            },
            {
              title: "Badges",
              href: "badges",
              icon: Badge,
              variant: "ghost",
            },
          ]}
        />
      </div>
    </>
  );
};
