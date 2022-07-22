import DashboardNav from "./dashboardNav";
import Header from '../../header'
export default function DashboardLayout({ children, user }) {
  return (
    <>
      <div class="w-full h-full overflow-auto">
 
        <div class="grid grid-cols-12 h-full">
          <Header class="row col-span-12 h-screen" />
        <nav class="col-span-2 h-full  bg-info">
            <DashboardNav />
          </nav>
          <div class="pl-10 col-span-10 h-screen bg-white">{children}</div>
        </div>
      </div>
    
    </>
  );
}