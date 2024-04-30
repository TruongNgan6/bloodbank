import { Sidebar } from "@/components/roles/sidebar";

export default function AdminPage() {
  return (
    <>
      <div className="min-h-screen flex w-full bg-white text-black">
        <div>
          <Sidebar />
        </div>
        <div className="w-full p-8">Admin Page Dashboard</div>
      </div>
    </>
  );
}
