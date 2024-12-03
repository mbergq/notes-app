import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./Index.tsx"),
  route("about", "./components/About.tsx"),
  route("note", "./components/Note.tsx"),
] satisfies RouteConfig;
