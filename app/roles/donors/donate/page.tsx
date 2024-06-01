import CardInfo, { CardInfoProps } from "@/components/roles/card-info"; // Import CardInfoProps correctly
import { DonorsNav } from "@/components/roles/donor-avatar";
import { DonateDialog } from "@/components/roles/donors-donate-blood";
import { PageTitle } from "@/components/roles/page-title";
import { User, Blocks, Timer, HandHeart } from "lucide-react";

const cardData: CardInfoProps[] = [
  {
    label: "Donate",
    icon: User,
    amount: "1,289,900 donors",
    description: "+2% from last month",
  },
  {
    label: "Learn about donating blood",
    icon: Blocks,
    amount: "7 Steps ",
    description: "+2% from last month",
  },
  {
    label: "Are you eligible?",
    icon: Timer,
    amount: "999 plans",
    description: "+8% from last month",
  },
  {
    label: "Join our team",
    icon: HandHeart,
    amount: "9,999 donors",
    description: "+9% from last month",
  },
];

export default function DonatePage() {
  return (
    <>
      <div className="flex animate-fadeIn">
        <div className="grow h-14">
          <PageTitle title={"Donate"} className={""} />
          <section
            className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all
          sm:grid-cols-2 xl:grid-cols-4 my-8
          "
          >
            {cardData.map((d, i) => (
              <CardInfo
                key={i}
                amount={d.amount}
                description={d.description}
                icon={d.icon}
                label={d.label}
              />
            ))}
          </section>
          <div>
            <DonateDialog />
          </div>
        </div>
        <div className="grow h-14"></div>
        <div>
          <DonorsNav />
        </div>
      </div>
    </>
  );
}
