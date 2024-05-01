import { PageTitle } from "@/components/roles/page-title";
import { TableDonors } from "@/components/roles/table-donors";

export default function BloodDonorsPage() {
  return (
    <>
      <div>
        <PageTitle title={"Blood Donors"} className={""} />
        <TableDonors />
      </div>
    </>
  );
}
