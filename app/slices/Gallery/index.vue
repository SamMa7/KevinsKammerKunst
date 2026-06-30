<template>
  <div class="gap-5 sm:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-8 grow">
      <NuxtImg 
        v-for="(picture, _index) in imagePage" 
        class="w-full h-auto hover:cursor-pointer hover:scale-105 transition-all" 
        loading="lazy" 
        :alt="picture.picture.alt" 
        :src="picture.picture.url ?? undefined"
        @click="openPictureModal(_index)"
      />
  </div>

  <Pagination v-model:current-page="currentPage" :items-count="allImages.length" :items-per-page="imagesPerPage"/>

  <Modal v-model:show-modal="open">
    <div class="bg-light fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-9/12 lg:w-8/12 h-5/6 rounded-md">
      <button 
          class="btn-link fixed right-5 top-5 z-50"  
          @click="open = false"
      > 
          <Icon name="mdi:close" size="25"/> 
      </button>
        <div class="p-10 size-full">
          <NuxtImg 
            class="object-contain max-w-[95%] sm:max-w-[87%] lg:max-w-[80%] size-full m-auto" 
            loading="lazy" 
            :alt="allImages[currentIndex]?.picture.alt" 
            :src="allImages[currentIndex]?.picture.url ?? undefined"
          />
          <button 
            class="btn-dark rounded-full size-12 z-50 fixed left-5 bottom-20 lg:left-32 lg:top-1/2"
            :disabled="currentIndex === 0"
            @click="prevImage()"
          >
            <Icon name="mdi:arrow-left" size="25"/>
          </button>
          <button 
            class="btn-dark rounded-full size-12 z-50 fixed right-5 bottom-20 lg:right-32 lg:top-1/2"
            :disabled="currentIndex === allImages.length-1"
            @click="nextImage()"
          >
            <Icon name="mdi:arrow-right" size="25"/>
          </button>
        </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
  import type { Content } from "@prismicio/client";
  import Modal from "~/components/modal.vue";
import Pagination from "~/components/pagination.vue";

  defineProps(getSliceComponentProps<Content.GallerySlice>());

  const prismic = usePrismic();
  const { data } = await useAsyncData(() =>
    prismic.client.getSingle("illustrations"),
  );
  
  const imagesPerPage = 10;
  const allImages = data.value?.data.slices[0]?.primary.pictures ?? [];
  const currentPage = ref(0);

  const imagePage = computed(() => {
    const index = imagesPerPage*currentPage.value; 
    return allImages.slice(index, index+imagesPerPage) 
  });

  const open = ref(false);
  const currentIndex = ref(0);

  const openPictureModal = (index: number) => {
    if(!index && index !== 0) return;

    open.value = true;
    currentIndex.value = index
  }

  const nextImage = () => {
    currentIndex.value++;
    if (currentIndex.value%imagesPerPage === 0) currentPage.value++;
  }
  const prevImage = () => {
    currentIndex.value--;
    if (currentIndex.value%imagesPerPage === (imagesPerPage-1)) currentPage.value--;
  }

</script>
