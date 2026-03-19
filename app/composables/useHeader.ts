export const useHeader = () => {
    const prismic = usePrismic();

    return useAsyncData("$header", () => {
        return prismic.client.getSingle("header")
    }).data;
}