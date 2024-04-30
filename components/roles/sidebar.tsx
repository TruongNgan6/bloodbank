"use client";

import { use, useState } from "react";
import { Nav } from "../ui/nav";
import {
  ChevronRight,
  GitPullRequest,
  HeartPulse,
  LayoutDashboard,
  UserRound,
} from "lucide-react";
import { Button } from "../ui/button";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleSidbar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
      <div className="relative min-y-[80px] border-r px-3 pb-10 pt-24">
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidbar}
            variant="secondary"
            className="rounded-full p-2 "
          >
            <ChevronRight />
          </Button>
        </div>

        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Dashboard",
              href: "dashboard",
              icon: LayoutDashboard,
              variant: "default",
            },
            {
              title: "Blood Donors",
              href: "blood-donors",
              icon: UserRound,
              variant: "ghost",
            },
            {
              title: "Blood Bank",
              href: "blood-bank",
              icon: HeartPulse,
              variant: "ghost",
            },
            {
              title: "Blood Request",
              href: "blood-request",
              icon: GitPullRequest,
              variant: "ghost",
            },
          ]}
        />
      </div>
    </>
  );
};
