import DashboardList from "@/features/dashboard/DashboardList";
import { issuedBooksData } from "@/features/dashboard/data/issuedBooks";
import React from "react";

function issued() {
  function handleNewIssue() {
    console.log("Hello world");
  }
  return (
    <DashboardList
      caption="Issued Books"
      data={issuedBooksData}
      action={handleNewIssue}
      actionCaption="Issue Book"
    />
  );
}

export default issued;
