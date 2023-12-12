import { Outlet } from "react-router-dom";
import { Header } from "../../components/layout/main/Header";
import { Sidebar } from "../../components/layout/main/Sidebar";


export function MainLayout() {
  return (
    <main>
      <Header />
      <section className="min-h-screen flex bg-slate-100">
        <Sidebar />
        <div className="p-5">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
