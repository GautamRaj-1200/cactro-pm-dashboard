import BudgetStatus from "./components/BudgetStatus/BudgetStatus";
import DashboardStats from "./components/DashboardStats/DashboardStats";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <DashboardStats />
      <BudgetStatus />
    </>
  );
};

export default App;
