import { useRouter } from "next/router";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

const hideNavbar = ["/success", "/login"];

export default function AppLayout({ children }) {
  const router = useRouter();
  const hiddNav = hideNavbar.includes(router.asPath);

  return (
    <>
      <Meta />
      {hiddNav ? null : <Navbar />}
      {children}
    </>
  );
}
