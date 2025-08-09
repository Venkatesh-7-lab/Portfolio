export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  screenshots?: string[];
}

export const projectList: Project[] = [
  {
    title: "Volunteer Management System (VMS)",
    description:
      "A system to manage volunteers from registration to study completion. It supports different user roles like admins and coordinators, allows screening and scheduling of volunteers, and tracks their progress. The system includes role-based dashboards, approval workflows, and secure data storage.",
    techStack: ["React", "Redux", "TypeScript", ".NET Core", "SQL Server"],
  },
  {
    title: "Annual Product Quality Review (APQR)",
    description:
      "A system designed to automate and manage Annual Product Quality Review (APQR) schedules and clinical task planning. It supports frequency-based execution, ensures regulatory compliance, and streamlines tracking of recurring quality activities using optimized SQL procedures and dynamic JSON data handling.",
    techStack: ["React", "Bootstrap", "SQL Server", ".NET Core Web API"],
  },
];
