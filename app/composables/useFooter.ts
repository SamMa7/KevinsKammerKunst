export const useFooter = () => {
    const prismic = usePrismic();

    return useAsyncData("$footer", () => {
        return prismic.client.getSingle("footer")
    }).data;
}