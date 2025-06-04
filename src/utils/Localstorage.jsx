const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e1@e.com",
    password: "123",
    tasks: [
      {
        title: "Design UI",
        type: "active",
        taskDescription: "Design the new dashboard layout for user analytics.",
        taskDate: "2025-06-01",
        category: "Design",
        active: true,
        completed: false,
        pending: false,
        newTask: false,
        failed: false
      },
      {
        title: "Fix bug #21",
        type: "completed",
        taskDescription: "Resolve issue related to incorrect rendering in mobile view.",
        taskDate: "2025-05-28",
        category: "Bug Fix",
        active: false,
        completed: true,
        pending: false,
        newTask: false,
        failed: false
      },
      {
        title: "Write unit tests",
        type: "pending",
        taskDescription: "Write unit tests for the authentication module.",
        taskDate: "2025-06-03",
        category: "Testing",
        active: false,
        completed: false,
        pending: true,
        newTask: false,
        failed: false
      },
      {
        title: "Implement login flow",
        type: "newTask",
        taskDescription: "Develop login functionality using JWT and context API.",
        taskDate: "2025-06-04",
        category: "Development",
        active: false,
        completed: false,
        pending: false,
        newTask: true,
        failed: false
      },
      {
        title: "Resolve deployment issue",
        type: "failed",
        taskDescription: "Fix the broken pipeline during production deployment.",
        taskDate: "2025-05-30",
        category: "DevOps",
        active: false,
        completed: false,
        pending: false,
        newTask: false,
        failed: true
      }
    ],
    taskCount: 5,
    taskStats: { active: 1, completed: 1, pending: 1, newTask: 1, failed: 1 }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "e2@e.com",
    password: "123",
    tasks: [
      {
        title: "Update documentation",
        type: "active",
        taskDescription: "Revise README and API documentation for clarity.",
        taskDate: "2025-06-02",
        category: "Documentation",
        active: true,
        completed: false,
        pending: false,
        newTask: false,
        failed: false
      },
      {
        title: "Refactor code",
        type: "active",
        taskDescription: "Improve code structure and eliminate redundancy in utils.js.",
        taskDate: "2025-06-01",
        category: "Code Maintenance",
        active: true,
        completed: false,
        pending: false,
        newTask: false,
        failed: false
      },
      {
        title: "Create user flow",
        type: "newTask",
        taskDescription: "Design wireframes representing the complete user journey.",
        taskDate: "2025-06-03",
        category: "UX Design",
        active: false,
        completed: false,
        pending: false,
        newTask: true,
        failed: false
      },
      {
        title: "Bug triage",
        type: "failed",
        taskDescription: "Organize and prioritize reported bugs from last sprint.",
        taskDate: "2025-05-31",
        category: "QA",
        active: false,
        completed: false,
        pending: false,
        newTask: false,
        failed: true
      }
    ],
    taskCount: 4,
    taskStats: { active: 2, completed: 0, pending: 0, newTask: 1, failed: 1 }
  },
  {
    id: 3,
    firstName: "Raj",
    email: "e3@e.com",
    password: "123",
    tasks: [
      {
        title: "Deploy to staging",
        type: "completed",
        taskDescription: "Push current release build to staging server.",
        taskDate: "2025-05-29",
        category: "Deployment",
        active: false,
        completed: true,
        pending: false,
        newTask: false,
        failed: false
      },
      {
        title: "Team meeting",
        type: "pending",
        taskDescription: "Weekly sync-up to review sprint progress and blockers.",
        taskDate: "2025-06-04",
        category: "Meetings",
        active: false,
        completed: false,
        pending: true,
        newTask: false,
        failed: false
      },
      {
        title: "Backend integration",
        type: "active",
        taskDescription: "Connect frontend with new APIs for user profile module.",
        taskDate: "2025-06-02",
        category: "Integration",
        active: true,
        completed: false,
        pending: false,
        newTask: false,
        failed: false
      },
      {
        title: "Fix navbar",
        type: "newTask",
        taskDescription: "Resolve responsive issues in the navbar on iOS devices.",
        taskDate: "2025-06-03",
        category: "Frontend",
        active: false,
        completed: false,
        pending: false,
        newTask: true,
        failed: false
      },
      {
        title: "Resolve merge conflict",
        type: "failed",
        taskDescription: "Handle version control conflict in feature branch merge.",
        taskDate: "2025-05-30",
        category: "Version Control",
        active: false,
        completed: false,
        pending: false,
        newTask: false,
        failed: true
      }
    ],
    taskCount: 5,
    taskStats: { active: 0, completed: 1, pending: 2, newTask: 1, failed: 1 }
  }
];


const admin = [
  {
    "admin": {
      "id": 1,
      "email": "admin@me.com",
      "password": "123"
    }
  }
];

export const setLocalStorage = () => {
  // Always clear and reset for fresh data
  localStorage.removeItem('employees');
  localStorage.removeItem('admin');
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];
  return { employees, admin };
};