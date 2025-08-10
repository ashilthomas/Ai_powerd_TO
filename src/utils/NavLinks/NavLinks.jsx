import { Home, BarChart2, Users, Settings } from "lucide-react";

const NAVLINKS = [
  { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
  { name: "Calendar", path: "/calendar", icon: <BarChart2 className="w-5 h-5" /> },
  { name: "Settings", path: "/settings", icon: <Settings className="w-5 h-5" /> },
  { name: "Users", path: "/users", icon: <Users className="w-5 h-5" /> },
];

export default NAVLINKS;