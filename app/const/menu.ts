export const mainMenu = [
    {
        id: 'dsb',
        label: 'Dashboard',
        href: '/dashboard',
        icon: '<IconMenuDashboard className="shrink-0 group-hover:!text-primary" />',
        subMenu: []
    },
    {
        id: 'crs',
        label: 'Kelas',
         icon: '<IconMenuDashboard className="shrink-0 group-hover:!text-primary" />',
        subMenu: [{
            label: "Gratis",
            href: "/course/free",
            icon: '<IconMenuDashboard className="shrink-0 group-hover:!text-primary" />',
        },
        {
            label: "Kelas Saya",
            href: "/course/mine",
            icon: '<IconMenuDashboard className="shrink-0 group-hover:!text-primary" />',
        }]
    },
    {
        id: 'try',
        label: 'Try Out',
        href: '/tryout',
         icon: '<IconMenuDashboard className="shrink-0 group-hover:!text-primary" />',
        subMenu: []
    }
]