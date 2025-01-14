"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { EventSetup } from "@/components/events/EventSetup";
import { Schedule } from "@/components/schedule/Schedule";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <Sidebar />
      <div className="pl-[219px] min-h-screen">
        <div className="max-w-[1280px] mx-auto p-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-7">
              <EventSetup />
            </div>
            <div className="col-span-5">
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}