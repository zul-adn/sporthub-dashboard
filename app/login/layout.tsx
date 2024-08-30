import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen text-black dark:text-white-dark">
      {children}
    </div>
  );
};

export default LoginLayout;
