// import ContentAnimation from "@/components/layouts/content-animation";
// import Footer from "@/components/layouts/footer";
// import Header from "@/components/layouts/header";
// import MainContainer from "@/components/layouts/main-container";
// import Overlay from "@/components/layouts/overlay";
// import ScrollToTop from "@/components/layouts/scroll-to-top";
// import Setting from "@/components/layouts/setting";
// import Sidebar from "@/components/layouts/sidebar";
// import Portals from "@/components/portals";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* BEGIN MAIN CONTAINER */}
      <div className="relative">{children}</div>
    </>
  );
}
