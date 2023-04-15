import { Icon } from "@iconify/react";
import homeFill from "@iconify/icons-eva/home-fill";
import fileFill from "@iconify/icons-eva/file-fill";
// routes
import { PATH_DASHBOARD } from "../../routes/paths";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Home",
    path: "#home-main",
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
  },
  {
    title: "About",
    path: "#about-main",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  },
  // {
  //   title: "Services",
  //   path: "services",
  //   icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  // },
  // {
  //   title: "Services",
  //   path: PATH_DASHBOARD.root,
  //   icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  //   children: [
  //     {
  //       items: [
  //         { title: "Web Services", path: "/services" },
  //         { title: "Technology", path: "/technology" },
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Contact Us",
    path: "#contact-main",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  },
];

export default menuConfig;
