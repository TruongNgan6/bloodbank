import { DoctorsRequestForm } from "@/components/roles/doctor-request-form";
import { PageTitle } from "@/components/roles/page-title";

export default function SendRequestPage() {
  return (
    <>
      <div className="my-8">
        <PageTitle title={"Send Request"} className={""} />
      </div>
      <div>
        <DoctorsRequestForm />
      </div>
    </>
  );
}
