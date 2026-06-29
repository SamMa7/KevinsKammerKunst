<template>
    <nav class="items-center flex">
        <!-- DESKTOP -->
        <div class="gap-10 hidden lg:flex">
            <NuxtLink 
                v-for="link in header?.data.navigation" 
                class="nav-link router-link-light"
                :to="getUrl(link.link)"
            > 
                {{link.link.text}}
            </NuxtLink>
        </div>

        <!-- MOBILE -->
        <button @click="showNav = true" class="lg:hidden">
            <icon name="mdi:menu" size="35" class="router-link-light"/>
        </button>

        <Transition>
            <div v-if="showNav" class="overlay-dark fixed top-0 left-0 right-0 bottom-0 size-full z-40" @click="showNav = false"/>
        </Transition>
        <Transition name="slide-fade">
            <div v-if="showNav" class="bg-light h-full w-fit fixed top-0 right-0 bottom-0 size-full z-40 flex gap-10 flex-col p-10 sm:px-24">
                <NuxtLink 
                    v-for="link in header?.data.navigation" 
                    :to="getUrl(link.link)"
                    class="nav-link text-xl text-right w-full router-link-dark"
                    @click="showNav = false"
                > 
                    {{link.link.text}}
                </NuxtLink>
            </div>
        </Transition>

    </nav>
</template>

<script setup lang="ts">
    import { getUrl } from '~/util/helperFunctions';
    const header = useHeader();

    const showNav = ref(false);
</script>