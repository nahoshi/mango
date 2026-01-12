import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

export function App() {
	return <h1>Risia linda</h1>;
}
