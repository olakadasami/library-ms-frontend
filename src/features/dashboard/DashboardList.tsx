import React from "react";
import TableComponent from "../table/Table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface TableProps<T> {
  caption: string;
  data: T[];
  action?: () => void;
  actionCaption?: string;
  listAll?: boolean;
  listAllHref?: Url;
}

function DashboardList<T extends object>({
  data,
  action,
  caption,
  actionCaption,
  listAll,
  listAllHref,
}: TableProps<T>) {
  return (
    <section className="shadow rounded-xl p-4 space-y-4  bg-background">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl">{caption}</h2>
        <div className="flex items-center gap-4">
          {action && (
            <Button onClick={action} variant={"outline"}>
              {actionCaption}
            </Button>
          )}
          {listAll && listAllHref && (
            <Link href={listAllHref}>
              <Button variant="outline">View all</Button>
            </Link>
          )}
        </div>
      </div>

      <TableComponent data={data} />
    </section>
  );
}

export default DashboardList;
