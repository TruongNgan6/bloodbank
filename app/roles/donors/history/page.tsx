import { DonorsNav } from "@/components/roles/donor-avatar";
import { PageTitle } from "@/components/roles/page-title";
import { TableHistoryDonation } from "@/components/roles/history-donation";

export default function HistoryPage() {
  return (
    <>
      <div className="flex animate-fadeIn">
        <div className="grow h-14">
          <PageTitle title={"History"} className={""} />
        </div>
      </div>
      <div>
        <TableHistoryDonation />
      </div>
    </>
  );
}
