import { Sidebar } from "@/components/roles/sidebar";

export default function AdminPageRoute({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen flex w-full bg-white text-black">
        <div>
          <Sidebar />
        </div>
        <div className="w-full p-8">{children}</div>
      </div>
    </>
  );
}
