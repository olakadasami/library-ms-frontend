import React, { PropsWithChildren } from "react";

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
}

export default DashboardLayout;
