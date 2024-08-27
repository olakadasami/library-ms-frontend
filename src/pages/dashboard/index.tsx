import InfoCard from "@/features/dashboard/InfoCard/InfoCard";
import { infoCardData } from "@/features/dashboard/InfoCard/infoCardData";
import UsersList from "@/features/users/UsersList";
import React from "react";

function index() {
  return (
    <div className="space-y-4 sm:py-4 px-6 relative bg-background">
      <h1 className="text-4xl font-semibold">
        Hello <span className="text-primary">Samuel</span>
      </h1>
      <main className=" space-y-4">
        {/* Top containers */}
        <div className="flex flex-wrap gap-4">
          {infoCardData.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-2">
          <div>
            <UsersList />
          </div>
          <div>
            <UsersList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default index;
