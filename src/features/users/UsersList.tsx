import React from "react";
import TableComponent from "../table/Table";
import { invoices } from "../table/invoiceData";
import { Button } from "@/components/ui/button";

function UsersList() {
  return (
    <section className="shadow rounded-lg p-4  bg-background">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl">Users List</h2>
        <Button variant={"outline"}>Add new user</Button>
      </div>

      <TableComponent data={invoices} />
    </section>
  );
}

export default UsersList;
