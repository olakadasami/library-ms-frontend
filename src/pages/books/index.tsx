import DashboardList from "@/features/dashboard/DashboardList";
import { issuedBooksData } from "@/features/dashboard/data/issuedBooks";
import { overdueBooks } from "@/features/dashboard/data/overdueBooks";
import React from "react";

function index() {
  const handleNewBookIssue = () => console.log("Handle Issue book");
  return (
    <main className="space-y-6">
      <section className="grid grid-cols-2 mt-4 gap-6">
        <div className="bg-slate-50">
          <DashboardList
            data={issuedBooksData.slice(0, 2)}
            caption="All Books"
            action={handleNewBookIssue}
            actionCaption="View all"
          />
        </div>
        <div className="bg-slate-50">
          <DashboardList
            caption="Overdue Book List"
            data={overdueBooks.slice(0, 2)}
            action={handleNewBookIssue}
            actionCaption="View all"
          />
        </div>
      </section>

      <section className="grid grid-cols-2 mt-4 gap-6">
        <div className="bg-slate-50">
          <DashboardList
            data={issuedBooksData.slice(0, 2)}
            caption="Issued Books"
            action={handleNewBookIssue}
            actionCaption="New issue"
          />
        </div>
        <div className="bg-slate-50">
          <DashboardList
            caption="Overdue Book List"
            data={overdueBooks.slice(0, 2)}
            action={handleNewBookIssue}
            actionCaption="View all"
          />
        </div>
      </section>
    </main>
  );
}

export default index;
