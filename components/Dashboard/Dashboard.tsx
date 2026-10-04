import DashboardNav from "./Dashboardnav";
import VideoInput from "./VideoInput";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <DashboardNav />
      <VideoInput />
    </main>
  );
}