import createClient from "openapi-fetch";
import type { paths } from "@/types/mangadex";

export const mangadex = createClient<paths>({
	baseUrl: "https://api.mangadex.org",
});
