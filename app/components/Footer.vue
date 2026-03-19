<template>
    <footer class="w-full bg-dark text-light flex justify-center">
        <div class="container flex justify-between px-52 py-3">
            <div class="flex gap-8 justify-center">
                <a 
                    v-for="link in footer?.data.social_media" class="flex items-center"
                    :href="getUrl(link.link)"
                > 
                    <Icon :name="`mdi:${link.link.text?.toLowerCase()}`" size="30"/>
                </a>
            </div>
            <div>
                <a 
                    v-for="link in footer?.data.other_links" class="flex items-center"
                    :href="getUrl(link.link)"
                > 
                    {{link.link.text}}
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import { getUrl } from '~/util/helperFunctions';

    const footer = useFooter();
</script>