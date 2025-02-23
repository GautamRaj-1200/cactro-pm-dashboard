// Types for dashboard statistics
export interface DashboardStat {
    id: string;
    imgSrc: string;
    stat: number;
    title: string;
  }
  
  // Position types for stats layout
  export type StatPosition = 'top-left' | 'top-right';
  
  // Interface for grouped dashboard statistics
  export interface DashboardStatsGroup {
    topLeft: DashboardStat[];
    topRight: DashboardStat[];
  }
  
  // Default images (you can replace these with actual image paths)
  export const STAT_IMAGES = {
    PROJECT: '/images/project-icon.svg',
    COMPLETED: '/images/completed-icon.svg',
    ONGOING: '/images/ongoing-icon.svg',
    DELAYED: '/images/delayed-icon.svg',
    EMPLOYEES: '/images/employees-icon.svg',
  };
  
  // Dashboard statistics data
  export const DASHBOARD_STATS: DashboardStatsGroup = {
    topLeft: [
      {
        id: 'total-projects',
        imgSrc: STAT_IMAGES.PROJECT,
        stat: 5,
        title: 'Total Projects',
      },
      {
        id: 'completed-projects',
        imgSrc: STAT_IMAGES.COMPLETED,
        stat: 1,
        title: 'Completed',
      },
      {
        id: 'ongoing-projects',
        imgSrc: STAT_IMAGES.ONGOING,
        stat: 3,
        title: 'Ongoing',
      },
    ],
    topRight: [
      {
        id: 'delayed-projects',
        imgSrc: STAT_IMAGES.DELAYED,
        stat: 5,
        title: 'Delayed',
      },
      {
        id: 'total-employees',
        imgSrc: STAT_IMAGES.EMPLOYEES,
        stat: 5,
        title: 'Employees',
      },
    ],
  };
  
  // Helper function to get stats by position
  export const getStatsByPosition = (position: StatPosition): DashboardStat[] => {
    return position === 'top-left' ? DASHBOARD_STATS.topLeft : DASHBOARD_STATS.topRight;
  };