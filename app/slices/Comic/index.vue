<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 w-full justify-center gap-y-10 lg:gap-x-10">
      <div v-for="comic in slice.primary.comics" @click="openComicModal(comic)">
        <h2 class="pb-8">{{ comic.title }}</h2>
        <div class="relative group hover:z-40">
          <NuxtImg 
            v-if="comic.slides[2]"
            class="comic-img z-10 group-hover:rotate-[24deg]" 
            loading="lazy" 
            :src="getUrl(comic.slides[2])"
          />
          <NuxtImg 
            v-if="comic.slides[1]"
            class="comic-img z-20 absolute group-hover:rotate-12" 
            loading="lazy" 
            :src="getUrl(comic.slides[1])"
          />
          <NuxtImg 
            v-if="comic.slides[0]"
            class="comic-img z-30 absolute group-hover:scale-110" 
            loading="lazy" 
            :src="getUrl(comic.slides[0])"
          /> 
        </div>
      </div>
    </div>

    <Modal v-model:show-modal="open">
      <div class="p-2 sm:p-10 flex size-full justify-center items-center">
        <button 
            class="btn-link-light fixed right-5 z-50 top-5"  
            @click="open = false"
        > 
            <Icon name="mdi:close" size="30"/> 
        </button>
        <ClientOnly>
          <Flipbook 
            v-slot="flipBookRef"
            class="flipbook" 
            :pages="['', ...currentComicPages]" 
          > 
            <button 
              class="btn-dark rounded-full size-12 fixed z-50 left-5 bottom-20 lg:left-32 lg:top-1/2"
              :disabled="!flipBookRef.canFlipLeft"
              @click.stop="flipBookRef.flipLeft"
            >
              <Icon name="mdi:arrow-left" size="25"/>
            </button>
            <button 
              class="btn-dark rounded-full size-12 fixed z-50 right-5 bottom-20 lg:right-32 lg:top-1/2"
              :disabled="!flipBookRef.canFlipRight"
              @click.stop="flipBookRef.flipRight"
            >
              <Icon name="mdi:arrow-right" size="25"/>
            </button>
          </Flipbook>
        </ClientOnly>
      </div>
    </Modal>
  </section>
</template>

<script setup lang="ts">
  import type { Content } from "@prismicio/client";
  import Flipbook from "@evomark/flipbook-vue";
  import { getUrl } from "~/util/helperFunctions";
  import Modal from "~/components/modal.vue";

  defineProps(getSliceComponentProps<Content.ComicSlice>());

  const open = ref(false);
  const currentComic = ref<Content.ComicSliceDefaultPrimaryComicsItem | undefined>(undefined);
  const currentComicPages = computed(() => {
    return(currentComic.value?.slides ?? [])
      .map((slide) => getUrl(slide))
      .filter((url): url is string => Boolean(url));
  });

  const openComicModal = (comic: Content.ComicSliceDefaultPrimaryComicsItem) => {
    if(!comic) return;

    open.value = true;
    currentComic.value = comic;
  }
</script>
