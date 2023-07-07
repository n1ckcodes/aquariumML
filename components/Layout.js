import Footer from "./Footer";
import NavBar from "./Navbar";
import Breadcrumb from "./Breadcrumbs";
export default function RootLayout({ children }) {
  return (
    <>
      <div class="mx-auto">
        <div class="min-h-screen flex">
          <div class="w-60 flex-initial border-r-2">
            <NavBar />
          </div>
          <div class="flex-1 m-10">
            <Breadcrumb />
            {children}
          </div>
        </div>
      </div>
      <div class="tile bg-pink-500 col-span-full">
        <Footer />
      </div>
    </>
  );
}
