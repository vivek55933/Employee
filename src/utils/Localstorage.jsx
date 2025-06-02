const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e1@e.com",
    password: "123",
    tasks: [
      { title: "Design UI", type: "active" },
      { title: "Fix bug #21", type: "completed" },
      { title: "Write unit tests", type: "pending" },
      { title: "Implement login flow", type: "newTask" },
      { title: "Resolve deployment issue", type: "failed" }
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
      { title: "Update documentation", type: "active" },
      { title: "Refactor code", type: "active" },
      { title: "Create user flow", type: "newTask" },
      { title: "Bug triage", type: "failed" }
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
      { title: "Deploy to staging", type: "completed" },
      { title: "Team meeting", type: "pending" },
      { title: "Backend integration", type: "active" },
      { title: "Fix navbar", type: "newTask" },
      { title: "Resolve merge conflict", type: "failed" }
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