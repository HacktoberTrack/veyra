import DashboardNav from "./Dashboardnav";
import VideoInput from "./VideoInput";
import VideoProcessing from "./VideoProcessing";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <DashboardNav />
      <VideoInput />
      <VideoProcessing />
    </main>
  );
}