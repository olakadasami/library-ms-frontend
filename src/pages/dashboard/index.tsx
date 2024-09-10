import BookCarousel from "@/features/books/BookCarousel";
import BarChartDashboard from "@/features/dashboard/Barchart";
import DashboardList from "@/features/dashboard/DashboardList";
import { issuedBooksData } from "@/features/dashboard/data/issuedBooks";
import { overdueBooks } from "@/features/dashboard/data/overdueBooks";
import InfoCard from "@/features/dashboard/InfoCard/InfoCard";
import { infoCardData } from "@/features/dashboard/InfoCard/infoCardData";
import UsersList from "@/features/users/UsersList";
import React from "react";

function index() {
  const handleNewBookIssue = () => console.log("Handle Issue book");
  return (
    <div className="space-y-4 sm:py-4 px-6 relative">
      <h1 className="text-4xl font-semibold">
        Hello <span className="text-primary">Samuel</span>
      </h1>
      <main className=" space-y-4">
        {/* Top containers */}
        <div className="flex flex-wrap gap-4 w-full">
          {infoCardData.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>

        {/* Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Users List */}
          <div>
            <UsersList />
          </div>

          {/* Book List */}
          <div>
            <UsersList />
          </div>
        </div>

        {/* Book Carousel */}
        <section className="flex items-center justify-center">
          <BookCarousel />
        </section>

        {/* Overdue books list */}
        <DashboardList
          caption="Overdue Book List"
          data={overdueBooks}
          listAll
          listAllHref={"books/overdue"}
        />

        {/* Book list and bar chart */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 ">
            <DashboardList
              data={issuedBooksData}
              caption="Issued Books"
              action={handleNewBookIssue}
              actionCaption="New issue"
              listAll
              listAllHref={"books/issued"}
            />
          </div>
          <div className="md:col-span-2 ">
            <BarChartDashboard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default index;
