import { PageTitle } from "@/components/roles/page-title";
import { TableRequests } from "@/components/roles/table-request";

export default function BloodRequestsPage() {
  return (
    <>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title={"Blood Requests"} className={""} />
        <TableRequests />
      </div>
    </>
  );
}
