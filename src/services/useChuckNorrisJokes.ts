import { useQuery } from "@tanstack/vue-query";

export function useChuckNorrisRandomJoke() {
    return useQuery({
        queryKey: ["random-joke"],
        queryFn: async () => {
            const response = await fetch(
                "https://api.chucknorris.io/jokes/random",
            );
            return response.json();
        },
        enabled: false,
    });
}
