import React, { FC } from "react";
import Footer from "@/components/ui/Footer";

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
