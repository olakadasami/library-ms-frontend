import React from "react";
import TableComponent from "../table/Table";
import { invoices } from "../table/invoiceData";

function UsersList() {
  return (
    <section>
      <div>
        <h2>Users List</h2>
        <button>Add new user</button>
      </div>

      <TableComponent data={invoices} />
    </section>
  );
}

export default UsersList;
