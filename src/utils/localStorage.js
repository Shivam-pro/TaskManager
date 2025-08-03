const employee = [
    {
        "id": 1,
        "name": "shivam",
        "email": "employee1@example.com",
        "password": "123",
        "role": "employee",
        "tasks": [
            {
                "newtask": true,
                "completed": false,
                "failed": false,
                "active": true,
                "task_title": "Organize Meeting",
                "task_description": "Schedule and organize a team meeting for the upcoming project.",
                "task_date": "2025-03-12",
                "category": "Management"
            },
            {
                "newtask": false,
                "completed": true,
                "failed": false,
                "active": false,
                "task_title": "Submit Report",
                "task_description": "Complete and submit the weekly progress report.",
                "task_date": "2025-03-11",
                "category": "Reporting"
            }
        ]
    },
    {
        "id": 2,
        "name": "Hari",
        "email": "employee2@example.com",
        "password": "123",
        "role": "employee",
        "tasks": [
            {
                "newtask": true,
                "completed": false,
                "failed": false,
                "active": true,
                "task_title": "Code Review",
                "task_description": "Review the code for the new application update.",
                "task_date": "2025-03-13",
                "category": "Development"
            },
            {
                "newtask": false,
                "completed": true,
                "failed": false,
                "active": false,
                "task_title": "Update Documentation",
                "task_description": "Update the system documentation to include recent changes.",
                "task_date": "2025-03-10",
                "category": "Documentation"
            },
            {
                "newtask": false,
                "completed": false,
                "failed": true,
                "active": false,
                "task_title": "Resolve Bug #123",
                "task_description": "Debug and resolve issue #123 in the tracking system.",
                "task_date": "2025-03-09",
                "category": "Development"
            }
        ]
    },
    {
        "id": 3,
        "name": "Ram",
        "email": "employee3@example.com",
        "password": "123",
        "role": "employee",
        "tasks": [
            {
                "newtask": true,
                "completed": false,
                "failed": false,
                "active": true,
                "task_title": "Client Presentation",
                "task_description": "Prepare and deliver a presentation for the new client proposal.",
                "task_date": "2025-03-14",
                "category": "Client Relations"
            },
            {
                "newtask": false,
                "completed": true,
                "failed": false,
                "active": false,
                "task_title": "Team Feedback Session",
                "task_description": "Collect and analyze feedback from team members.",
                "task_date": "2025-03-10",
                "category": "Feedback"
            }
        ]
    },
    {
        "id": 4,
        "name": "vidhi",
        "email": "employee4@example.com",
        "password": "123",
        "role": "employee",
        "tasks": [
            {
                "newtask": false,
                "completed": true,
                "failed": false,
                "active": false,
                "task_title": "Market Research",
                "task_description": "Conduct research on competitors' products.",
                "task_date": "2025-03-13",
                "category": "Research"
            },
            {
                "newtask": true,
                "completed": false,
                "failed": false,
                "active": true,
                "task_title": "Prepare Advertisement",
                "task_description": "Design and prepare a new advertisement for the campaign.",
                "task_date": "2025-03-15",
                "category": "Marketing"
            }
        ]
    },
    {
        "id": 5,
        "name": "Ravi",
        "email": "employee5@example.com",
        "password": "123",
        "role": "employee",
        "tasks": [
            {
                "newtask": true,
                "completed": false,
                "failed": false,
                "active": true,
                "task_title": "Inventory Check",
                "task_description": "Perform an inventory check for the warehouse.",
                "task_date": "2025-03-12",
                "category": "Operations"
            },
            {
                "newtask": false,
                "completed": true,
                "failed": false,
                "active": false,
                "task_title": "Vendor Meeting",
                "task_description": "Meet with vendors to discuss supply issues.",
                "task_date": "2025-03-10",
                "category": "Vendor Management"
            }
        ]
    }
];

const admin = {
    "id": 1,
    "name":"Shivam",
    "email": "admin@example.com",
    "password": "123",
    "role":"admin",
  };

export const setLocalStorage = ()=>{
    localStorage.setItem("employee",JSON.stringify(employee))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    let employees = JSON.parse(localStorage.getItem("employee"));
    let admin = JSON.parse(localStorage.getItem("admin"));
    return {employees, admin}
}
