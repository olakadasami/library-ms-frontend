import DashboardList from "@/features/dashboard/DashboardList";
import { issuedBooksData } from "@/features/dashboard/data/issuedBooks";
import React from "react";

function all() {
  return (
    <DashboardList
      caption="All Books"
      data={issuedBooksData}
      // action={handleNewIssue}
      // actionCaption="Issue Book"
    />
  );
}

export default all;
