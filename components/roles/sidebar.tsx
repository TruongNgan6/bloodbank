"use client";

import { use, useState } from "react";
import { Nav } from "../ui/nav";
import {
  GitPullRequest,
  HeartPulse,
  LayoutDashboard,
  UserRound,
} from "lucide-react";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState();

  return (
    <>
      <div>
        <Nav
          isCollapsed={false}
          links={[
            {
              title: "Dashboard",
              href: "/",
              icon: LayoutDashboard,
              variant: "default",
            },
            {
              title: "Blood Donors",
              href: "/",
              icon: UserRound,
              variant: "ghost",
            },
            {
              title: "Blood Banks",
              href: "/",
              icon: HeartPulse,
              variant: "ghost",
            },
            {
              title: "Blood Request",
              href: "/",
              icon: GitPullRequest,
              variant: "ghost",
            },
          ]}
        />
      </div>
    </>
  );
};
