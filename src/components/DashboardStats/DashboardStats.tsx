import "./dashboardstats.css";
import DashboardStatsCard from "../DashboardStatsCard/DashboardStatsCard";
import { DASHBOARD_STATS } from "../../constants/dashboardStats";

const DashboardStats = () => {
  return (
    <>
      <div className="dashboardstats__main">
        <div className="dashboardstats__main--top">
          <div className="dashboardstats__main--top--left">
            {DASHBOARD_STATS.topLeft.map((stat) => (
              <DashboardStatsCard
                key={stat.id}
                imgSrc={stat.imgSrc}
                stat={stat.stat}
                title={stat.title}
              />
            ))}
          </div>
          <div className="dashboardstats__main--top--right">
            {DASHBOARD_STATS.topRight.map((stat) => (
              <DashboardStatsCard
                key={stat.id}
                imgSrc={stat.imgSrc}
                stat={stat.stat}
                title={stat.title}
              />
            ))}
          </div>
        </div>
        <div className="dashboardstats__main--bottom">
          <div className="dashboardstats__main--bottom--left"></div>
          <div className="dashboardstats__main--bottom--right"></div>
        </div>
      </div>
    </>
  );
};

export default DashboardStats;
