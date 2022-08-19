import imageurl from "./images";

const NAVIGATION = {
  DASHBOARD: "/dashboard",
  COMPANY: "/dashboard/company",
};

const DASHBOARD_CARDS = [
  {
    id: 1,
    dataKey: "totalPlateNo",
    title: "Total Plate number",
    link: "",
    icon: imageurl.plate,
  },
  {
    id: 2,
    dataKey: "totalDriver",
    title: "Total Drivers",
    link: "",
    icon: imageurl.user,
  },
  {
    id: 3,
    dataKey: "totalComplaint",
    title: "Total Complaints",
    link: "",
    icon: imageurl.cop,
  },
];
export { NAVIGATION, DASHBOARD_CARDS };
