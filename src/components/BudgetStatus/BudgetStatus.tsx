import "./BudgetStatus.css";
import Button from "../Button/Button";
import { FaPlus, FaDownload, FaCalendar, FaFilter } from "react-icons/fa";

const BudgetStatus = () => {
  return (
    <>
      <div className="budgetstatus">
        <div className="budgetstatus__top">
          <h1>Budget Status</h1>
          <div>
            <Button variant="filled" icon={<FaPlus />} text="Add New Project" />
            <Button
              variant="outlined"
              icon={<FaDownload />}
              text="Download Project"
            />
            <Button
              variant="outlined"
              icon={<FaCalendar />}
              text="dd/mm/yyyy-dd/mm/yyyy"
            />
            <Button variant="outlined" icon={<FaFilter />} text="Filter" />
          </div>
        </div>
        <div className="budgetstatus__bottom"></div>
      </div>
    </>
  );
};

export default BudgetStatus;
