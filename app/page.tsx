import { Sidebar } from "../src/components/Sidebar";
import React from "react";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar.Logo />
      {/* <Sidebar.Menu items=[{name:Home, href:}] /> */}
      <Sidebar.Playlist />
      <Sidebar.Footer />
    </div>
  );
}
