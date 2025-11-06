import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import tutorials from "@/../public/data/tutorials.json";

export function AppSidebar({ menuItems }) {
  // const items = [
  //   {
  //     title: "Home",
  //     url: "#",
  //     icon: Home,
  //   },
  //   {
  //     title: "Inbox",
  //     url: "#",
  //     icon: Inbox,
  //   },
  //   {
  //     title: "Calendar",
  //     url: "#",
  //     icon: Calendar,
  //   },
  //   {
  //     title: "Search",
  //     url: "#",
  //     icon: Search,
  //   },
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: Settings,
  //   },
  // ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tutorials.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
