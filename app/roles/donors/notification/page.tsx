import { DonorMessages } from "@/components/roles/notification-donor";
import { PageTitle } from "@/components/roles/page-title";

export default function NotificationPage() {
  return (
    <>
      <div className="flex">
        <div className="grow h-14">
          <PageTitle title={"Notification"} className={""} />
        </div>
        <div>
          <DonorMessages />
        </div>
      </div>
    </>
  );
}
