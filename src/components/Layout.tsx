import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default Layout;
