import { SidebarDonors } from "@/components/roles/sidebar-donors";

export default function DonorsPageRoute({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen flex w-full bg-white text-black">
        <div>
          <SidebarDonors />
        </div>
        <div className="w-full p-8">{children}</div>
      </div>
    </>
  );
}
