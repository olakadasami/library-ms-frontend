import BookCarousel from "@/features/books/BookCarousel";
import InfoCard from "@/features/dashboard/InfoCard/InfoCard";
import { infoCardData } from "@/features/dashboard/InfoCard/infoCardData";
import UsersList from "@/features/users/UsersList";
import React from "react";

function index() {
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
      </main>
    </div>
  );
}

export default index;
