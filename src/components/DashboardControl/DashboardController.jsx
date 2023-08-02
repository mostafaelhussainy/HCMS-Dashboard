import Dashboard from "./Dashboard"
import DashboardDrawer from "./DashboardDrawer"
import { useState } from 'react';

function DashboardController() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setDrawerOpen(open);
  };

  return (
    <section id="dashboard-controller">
      <Dashboard drawerOpen = {drawerOpen} toggleDrawer = { toggleDrawer } />
      <Dashboard drawerOpen = {drawerOpen} toggleDrawer = { toggleDrawer } />
      <DashboardDrawer drawerOpen = {drawerOpen} toggleDrawer = { toggleDrawer } />
    </section>
  )
}

export default DashboardController