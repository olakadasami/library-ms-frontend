import React from "react";
import TableComponent from "../table/Table";
import { Button } from "@/components/ui/button";

interface TableProps<T> {
  caption: string;
  data: T[];
  action?: () => void;
  actionCaption?: string;
}

function DashboardList<T extends object>({
  data,
  action,
  caption,
  actionCaption,
}: TableProps<T>) {
  return (
    <section className="shadow rounded-xl p-4 space-y-4  bg-background">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl">{caption}</h2>
        {action && (
          <Button onClick={action} variant={"outline"}>
            {actionCaption}
          </Button>
        )}
      </div>

      <TableComponent data={data} />
    </section>
  );
}

export default DashboardList;
