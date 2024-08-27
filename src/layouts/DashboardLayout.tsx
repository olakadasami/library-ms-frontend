import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import React, { PropsWithChildren } from "react";

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full bg-muted/40 overflow-hidden">
      <aside className="w-fit p-4 bg-background ">
        <Nav />
      </aside>
      <main className="flex-1 p-4 overflow-scroll relative">
        <Header />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
