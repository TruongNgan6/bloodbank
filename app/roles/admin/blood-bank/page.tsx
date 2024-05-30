import { PageTitle } from "@/components/roles/page-title";
import { TableBlood } from "@/components/roles/table-blood";
export default function BloodBankPage() {
  return (
    <>
      {/* <div>
        <PageTitle title={"Blood Bank"} className={""} />
      </div> */}

      <div className="flex flex-col gap-5 w-full">
        <PageTitle title={"Blood Bank"} className={""} />
        <TableBlood />
      </div>
    </>
  );
}
