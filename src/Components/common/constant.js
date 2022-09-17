import imageurl from "./images";

const NAVIGATION = {
  DASHBOARD: "/dashboard",
  COMPANY: "/dashboard/company",
};

const DASHBOARD_CARDS = [
  {
    id: 1,
    dataKey: "total_plats",
    title: "Total Plate number",
    link: "",
    icon: imageurl.plate,
  },
  {
    id: 2,
    dataKey: "total_driver",
    title: "Total Drivers",
    link: "",
    icon: imageurl.user,
  },
  {
    id: 3,
    dataKey: "total_complaints",
    title: "Total Complaints",
    link: "",
    icon: imageurl.cop,
  },
];
const CUSTOM_PROPS = {
  CONFIRMATION_DELETE: {
    title: "Alert",
    description: "Are you sure you want to delete this record",
    confirmBtnText: "yes, delete",
  },
};
export { NAVIGATION, DASHBOARD_CARDS, CUSTOM_PROPS };
