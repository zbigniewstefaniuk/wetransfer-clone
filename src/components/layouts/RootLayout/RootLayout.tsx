import React, { FC } from "react";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import useAuthStateChange from "@/hooks/useAuthStateChange";

const RootLayout: FC<{
  children: React.ReactNode;
  isSessionRetrieved: boolean;
}> = ({ children, isSessionRetrieved = false }) => {
  const state = useAuthStateChange();

  return (
    <div>
      <Navbar isLoggedIn={!!(state.session || isSessionRetrieved)} />
      <main className="px-2 sm:px-4 pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
