import React, { FC } from "react";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import supabase from "@/lib/Supabase";
import useAuthUserData from "@/hooks/useAuthUserData";

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const authState = useAuthUserData();

  return (
    <div>
      <Navbar isLoggedIn={!!authState?.id} />
      <main className="px-2 sm:px-4 pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
