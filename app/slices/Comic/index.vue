<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="grid grid-cols-5 gap-10">
      <div v-for="comic in slice.primary.comics">
        <h3>{{ comic.title }}</h3>
        <NuxtImg 
          v-if="comic.slides[0]"
          class="object-contain h-[250px] hover:cursor-pointer" 
          loading="lazy" 
          :src="getUrl(comic.slides[0])"
          @click="openComicModal(comic)"
        />
      </div>
    </div>

    <Modal v-model:show-modal="open">
      <div class="p-10 flex size-full justify-center items-center">
        <button 
            class="btn-link-light fixed right-5 top-5"  
            @click="open = false"
        > 
            <Icon name="mdi:close" size="30"/> 
        </button>
        <ClientOnly>
          <Flipbook 
            v-slot="flipBookRef"
            class="flipbook" 
            :zooms="[1]"
            :startPage="0"
            :pages="currentComicPages" 
          > 
            <button 
              class="btn-dark rounded-full size-12 z-50 fixed left-32 top-1/2"
              :disabled="!flipBookRef.canFlipLeft"
              @click="flipBookRef.flipLeft"
            >
              <Icon name="mdi:arrow-left" size="25"/>
            </button>
            <button 
              class="btn-dark rounded-full size-12 z-50 fixed right-32 top-1/2"
              :disabled="!flipBookRef.canFlipRight"
              @click="flipBookRef.flipRight"
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
    return (currentComic.value?.slides ?? [])
      .map((slide) => getUrl(slide))
      .filter((url): url is string => Boolean(url));
  });

  const openComicModal = (comic: Content.ComicSliceDefaultPrimaryComicsItem) => {
    if(!comic) return;

    open.value = true;
    currentComic.value = comic;
  }

/*
*
*/
</script>
