<template>
    <div class="w-full flex justify-center h-12 pt-10">
        <div class="flex gap-5 w-fit items-center">
            <button 
                class="btn-link rounded-full size-12"
                :disabled="currentPage === 0"
                @click="currentPage--"
            >
                <Icon name="mdi:arrow-left" size="25"/>
            </button>
            <div class="flex gap-3 h-fit">
                <button 
                    v-for="index in Array.from(Array(maxPages).keys())"
                    :class="index === currentPage ? 'router-link-active' : 'nav-link'"
                    @click="currentPage = index"
                >
                    {{index+1}}
                </button>
            </div>
            <button 
                class="btn-link rounded-full size-12"
                :disabled="currentPage === maxPages-1"
                @click="currentPage++"
            >
                <Icon name="mdi:arrow-right" size="25"/>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const itemsCount = defineModel('itemsCount', {type: Number, required: true});
    const currentPage = defineModel('currentPage', {type: Number, required: true});
    const itemsPerPage = defineModel('itemsPerPage', {default: 10, required: false});

    const maxPages = ref(Math.ceil(itemsCount.value/itemsPerPage.value));
</script>
