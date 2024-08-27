import { LucideProps } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export interface TInfoCard {
  title: string;
  number: number;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

function InfoCard({ Icon, number, title }: TInfoCard) {
  return (
    <Card
      x-chunk="dashboard-05-chunk-1"
      className="rounded-lg p-4 flex justify-between gap-8"
    >
      <CardHeader className="p-0 gap-2 justify-between">
        <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
          {number}
        </CardTitle>
        <CardDescription className="text-xs md:text-sm capitalize font-semibold">
          {title}
        </CardDescription>
      </CardHeader>
      <CardDescription className="bg-primary text-primary-foreground p-2 rounded w-fit h-fit">
        <Icon size={20} />
      </CardDescription>
    </Card>
  );
}

export default InfoCard;
