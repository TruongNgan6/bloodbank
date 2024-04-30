import { cn } from "@/lib/utils";
import { Sidebar } from "../../components/roles/sidebar";

const RolesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default RolesLayout;
