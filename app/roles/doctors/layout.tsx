import { SidebarDoctor } from "@/components/roles/sidebar-dotors";

export default function DoctorPageRoute({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="min-h-screen flex w-full bg-white text-black">
                <div>
                    <SidebarDoctor />
                </div>
                <div className="w-full p-8">{children}</div>
            </div>
        </>
    );
}