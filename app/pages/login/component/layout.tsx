// import { landingIllustration } from "@config/images";
// import { APP_VERSION } from "@const";
import React, { FC, ReactNode } from "react";

export const LandingLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen sm:h-screen bg-primary-90">
      <div className="col-span-1 h-full flex flex-col justify-center items-center py-8">
        {/* <img
          src={`https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          className="h-48 lg:h-96"
        /> */}
      </div>
      <div className="col-span-1 h-full overflow-auto bg-white">{children}</div>
      <div className="absolute right-4 bottom-2 text-white">v.1.0.2</div>
    </div>
  );
};
