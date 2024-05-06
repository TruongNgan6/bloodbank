import { DonorsNav } from "@/components/roles/donor-avatar";
import { PageTitle } from "@/components/roles/page-title";

export default function HistoryPage() {
  return (
    <>
      <div className="flex">
        <div className="grow h-14">
          <PageTitle title={"History"} className={""} />
        </div>
        <div>
          <DonorsNav />
        </div>
      </div>
    </>
  );
}
