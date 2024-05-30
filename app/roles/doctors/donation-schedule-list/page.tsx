import { PageTitle } from "@/components/roles/page-title";
import { TableDonationSchedule } from "@/components/roles/table-donation-schedule";
export default function DonationScheduleList() {
    return (
        <>
            {/* <div>
                <PageTitle title={"Blood Bank"} className={""} />
            </div> */}

            <div className="flex flex-col gap-5 w-full">
                <PageTitle title={"Donation Schedule List"} className={""} />
                <TableDonationSchedule />
            </div>
        </>
    );
}
