import React, { FC } from "react";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import useAuthStateChange from "@/hooks/useAuthStateChange";

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const state = useAuthStateChange();

  return (
    <div>
      <Navbar isLoggedIn={!!state.session} />
      <main className="px-2 sm:px-4 pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
