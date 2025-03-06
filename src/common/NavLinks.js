const links = [
    { id: 1, name: "Home", path: "/" },
    {
        id: 2, name: "About", path: "/about",

        subRoutes: [
            { id: 2.1, name: "Committees", path: "/about/committees" },
            { id: 2.2, name: "Employees", path: "/about/employees" },
            { id: 2.3, name: "Contact Us", path: "/about/contact-us" },
            { id: 2.4, name: "Federal Certification", path: "/about/federal-certification" }
        ]
    },
    {
        id: 3,
        name: "Programs & Studies",
        path: "/program-studies",
        subRoutes: [
            // { id: 3.1, name: "Comprehensive Plans", path: "/program-studies/comprehensive-plans" },
            { id: 3.2, name: "Corridor Plans", path: "/program-studies/corridor-plans" },
            // { id: 3.3, name: "Small Area Plans", path: "/program-studies/small-area-plans" },
            { id: 3.4, name: "Regional Plans", path: "/program-studies/regional-plans" },
            { id: 3.5, name: "Reports", path: "/program-studies/reports" },
            { id: 3.6, name: "Multi-Modal Plans", path: "/program-studies/multi-modal-plans" }
        ]
    },
    {
        id: 4, name: "Plans", path: "/plan",
        subRoutes: [
            { id: 4.1, name: "Metropolitan Transportation Plans (MTP)", path: "/plan/metropolitan-transportation-plans" },
            { id: 4.2, name: "Metropolitan Transportation Improvement Programs (MTIP)", path: "/plan/metropolitan-transportation-improvement-programs" },
            { id: 4.3, name: "Congestion Management Process (CMP)", path: "/plan/congestion-management-process" },
            { id: 4.4, name: "Unified Planning Work Program (UPWP)", path: "/plan/unified-planning-work-program" },
            { id: 4.5, name: "Public Participation Plan (PPP)", path: "/plan/public-participation-plan" },
            { id: 4.6, name: "Transportation Performance Management", path: "/plan/transportation-performance-management" },
            { id: 4.7, name: "Listing of Obligated Projects", path: "/plan/listing-of-obligated-projects" },
            { id: 4.8, name: 'Title VI', path: "/plan/title-vi" }
        ]
    },
    {
        id: 5, name: "Data", path: "/data",
        subRoutes: [
            { id: 5.1, name: "Regional Travel Model", path: "/data/regional-travel-model" },
            { id: 5.2, name: "VDOT Roadway Functional Classification", path: '/data/VDOT-roadway-functional-classification' },
            // {
            //     id: 5.3, name: "Environmental Justice", path: "/data/environmental-justice"
            // },
            {
                id: 5.4, name: "Transportation Dashboard", path: "/data/transportation-dashboard"
            }
        ]

    },
    {
        id: 6, name: "Funding", path: "/funding"

        ,

        subRoutes: [
            { id: 6.1, name: "Regional Surface Transportation Block Grant", path: '/funding/regional-surface-transportation-block-grant' },
            { id: 6.2, name: "SMART SCALE", path: "/funding/CMAQ-program" },
            { id: 6.3, name: "TA Set-Aside", path: "ta" }
        ]
    }
];
export default links;