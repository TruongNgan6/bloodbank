import { PageTitle } from "@/components/roles/page-title";
import { TableDonors } from "@/components/roles/table-donors";

export default function BloodDonorsPage() {
  return (
    <>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title={"Blood Donors"} className={""} />
        <TableDonors />
      </div>
    </>
  );
}
