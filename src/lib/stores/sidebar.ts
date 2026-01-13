import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SidebarStore = {
	open: boolean;

	setOpen: (open: boolean) => void;
	toggleSidebar: () => void;
};

export const useSidebar = create<SidebarStore>()(
	persist(
		(set) => ({
			open: true,
			setOpen: (open) => set({ open }),
			toggleSidebar: () => set((state) => ({ open: !state.open })),
		}),
		{
			name: "sidebar",
		},
	),
);
