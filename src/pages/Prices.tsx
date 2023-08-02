import React from "react";

export default function Prices() {
  return (
    <div className="bg-white py-24 sm:py-32" id={"project"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Because the code is confidential, I can't show it to you, but I can
            explain what I am doing.
          </p>
        </div>
        {MainProjectList.map((items: any, index: number) => (
          <React.Fragment key={`MainProjectList${index}`}>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold  tracking-tight text-gray-700 capitalize">
                  {items.project_name}
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {items.project_description}
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                    Focus Point
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4  leading-6  sm:grid-cols-2 sm:gap-6"
                >
                  {items.includedFeatures2.map((feature: any) => (
                    <li key={feature.id} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className={"font-semibold text-gray-700 text-base"}>
                        {feature.title}{" "}
                        <span className={"text-gray-600 text-sm"}>
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const MainProjectList = [
  {
    id: 1,
    project_name: "hotel management system",
    project_description:
      "Developing a back-office admin panel for a hotel management company using React, TypeScript, and Redux" +
      " demonstrates your skills in front-end development and state management. The inclusion of role-based access" +
      " control is a crucial aspect of such applications, ensuring that different users have appropriate" +
      " permissions and can access relevant information.",
    includedFeatures2: [
      {
        id: 1,
        title: "Dashboard Overview:",
        description:
          "The dashboard provides a comprehensive overview of the hotel's operations. It likely includes widgets and charts to display essential information such as current room bookings, occupancy rates, revenue, and inventory status.",
      },
      {
        id: 2,
        title: "Room Bookings:",
        description:
          "Admin and agent's can manage room bookings through the admin panel. This functionality allows admin" +
          " and agent's" +
          " to view existing bookings, make new reservations, modify or cancel bookings, and handle room availability",
      },
      {
        id: 3,
        title: "Inventory Management:",
        description:
          "The admin panel allows hotel staff to manage inventory, including tracking and updating supplies, amenities, and other items necessary for hotel operations.",
      },
      {
        id: 4,
        title: "Role-Based Access Control (RBAC):",
        description:
          " RBAC is essential for ensuring that different users have specific roles and permissions within the admin panel. This helps maintain data security and privacy, as well as restrict access to sensitive information.",
      },
      {
        id: 5,
        title: "Sightseeing Booking Management:",
        description:
          "The admin panel includes the ability to manage sightseeing bookings for customers. This feature" +
          " allows users to browse available sightseeing tours or activities, schedule bookings, and manage tour details.",
      },
      {
        id: 6,
        title: "React TypeScript & Redux",
        description:
          "React, a popular JavaScript library ,TypeScript enhances the development process by providing" +
          " static typing,Redux is a state management library used in the development of this project.",
      },
    ],
  },
  {
    id: 2,
    project_name: "Onboarding Process",
    project_description:
      "Customer (KYC) process for the financial services company. KYC is a critical process for" +
      " financial institutions to verify the identity of their clients and comply with regulatory requirements. The onboarding process helps new clients to provide their personal information and necessary documents to get their accounts or services set up.",
    includedFeatures2: [
      {
        id: 10,
        title: "User Authentication",
        description:
          "Secure login and authentication mechanisms to ensure only authorized personnel can access the admin panel.",
      },
      {
        id: 11,
        title: "Client Search and Filters",
        description:
          "The ability to search for specific clients and apply filters to narrow down the list based on various criteria like application status, date of submission, etc.",
      },
      {
        id: 12,
        title: "Client Details",
        description:
          "A view to display detailed information about individual clients, including their submitted documents and current status in the onboarding process.",
      },
      {
        id: 13,
        title: "Progress Tracking",
        description:
          " A dashboard or visual representation of the overall onboarding process, showing the number of clients onboarded, pending applications, and completed applications.",
      },
      {
        id: 14,
        title: "Approvals and Rejections",
        description:
          " Tools to approve or reject client applications based on the review of submitted documents and information. This might include adding comments or notes about the decision.",
      },
      {
        id: 15,
        title: "Communication",
        description:
          " A way to communicate with clients during the onboarding process, such as sending notifications or reminders for incomplete submissions.",
      },
    ],
  },
];
