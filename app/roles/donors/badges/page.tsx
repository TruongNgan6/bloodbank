import { DonorsNav } from "@/components/roles/donor-avatar";
import { PageTitle } from "@/components/roles/page-title";

export default function BadgesPage() {
  return (
    <>
      <div className="flex">
        <div className="grow h-14">
          <PageTitle title={"Badges"} className={""} />
        </div>
        <div>
          <DonorsNav />
        </div>
      </div>
    </>
  );
}
