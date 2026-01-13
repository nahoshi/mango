import type { ReactNode } from "react";
import { useSidebar } from "@/lib/stores/sidebar";
import { cn } from "@/lib/utils";

export interface SidebarProps {
	children?: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
	const open = useSidebar((state) => state.open);

	return (
		<aside
			className={cn(
				"fixed top-0 right-0 h-screen z-50",
				"w-64 p-4",
				"bg-card/40 backdrop-blur-md",
				"transition-transform duration-300 ease-in-out",
				open ? "translate-x-0" : "translate-x-full",
			)}
			aria-hidden={!open}
		>
			<div className="flex flex-col gap-4">{children}</div>
		</aside>
	);
}
