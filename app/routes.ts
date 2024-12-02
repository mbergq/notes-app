import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./Home.tsx"),
  route("about", "./components/About.tsx"),
] satisfies RouteConfig;
