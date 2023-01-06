import RootLayout from "@/components/layouts/RootLayout";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

export default Root;
