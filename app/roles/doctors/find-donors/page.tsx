import { UserNav } from "@/components/roles/doctor-avatar";
import { DataTableToolbar } from "@/components/roles/doctor-toolbar";
import { PageTitle } from "@/components/roles/page-title";
import { TableFindDonors } from "@/components/roles/table-doctors";

export default function FindDonorsPage() {
  return (
    <>
      <div className="flex">
        <div className="grow h-14">
          <PageTitle title={"Find Donors"} className={""} />
        </div>
        <div>
          <UserNav />
        </div>
      </div>
      <DataTableToolbar />
      <TableFindDonors />
    </>
  );
}
