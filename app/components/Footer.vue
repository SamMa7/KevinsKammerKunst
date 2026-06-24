<template>
    <footer class="w-full bg-dark text-light flex justify-center">
        <div class="footer-header-container flex justify-between p-3 lg:px-52">
            <div class="flex gap-8 justify-center">
                <NuxtLink 
                    v-for="link in footer?.data.social_media" 
                    class="flex items-center"
                    :target="link.link.target ? '_blank' : ''"
                    :to="getUrl(link.link)"
                >   
                    <Icon :name="`mdi:${link.link.text?.toLowerCase()}`" size="30"/>
                </NuxtLink>
            </div>
            <div class="flex gap-3 justify-center">
                <NuxtLink 
                    v-for="(link, index) in footer?.data.other_links" class="flex items-center"
                    :to="getUrl(link.link)"
                    :target="link.link.target ? '_blank' : ''"
                > 
                    {{link.link.text}}
                    <span v-if="index !== ((footer?.data.other_links.length ?? 0)-1)" class="pl-3"> | </span>
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import { getUrl } from '~/util/helperFunctions';

    const footer = useFooter();
</script>