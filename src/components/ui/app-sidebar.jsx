import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
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
      <SidebarHeader className="text-2xl font-bold py-6 px-4">
        Python Tutorial{" "}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Python Tutorial</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {tutorials.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="block text-lg py-3 px-4 hover:bg-gray-100 rounded-md transition-colors"
                    >
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
      {/* <SidebarFooter>
        <p>erayagarer</p>
      </SidebarFooter> */}
    </Sidebar>
  );
}
