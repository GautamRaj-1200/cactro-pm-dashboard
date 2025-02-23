import "./dashboardstatscard.css";
interface DashboardStatsCardProps {
  imgSrc: string;
  stat: number;
  title: string;
}
const DashboardStatsCard = ({
  imgSrc,
  stat,
  title,
}: DashboardStatsCardProps) => {
  return (
    <div className="dashboardstats__card">
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <h1>{stat}</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default DashboardStatsCard;
