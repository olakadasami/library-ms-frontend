import DashboardList from "@/features/dashboard/DashboardList";
import { overdueBooks } from "@/features/dashboard/data/overdueBooks";

function overdue() {
  const handleNewBookIssue = () => console.log("Obasi de craze");
  return (
    <DashboardList
      caption="Overdue Book List"
      data={overdueBooks.slice(0, 2)}
    />
  );
}

export default overdue;
