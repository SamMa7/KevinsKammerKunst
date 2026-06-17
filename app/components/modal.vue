<template>
    <Transition>
        <div v-if="showModal" class="fixed top-0 left-0 right-0 bottom-0 size-full">
            <div class="overlay-dark" @click="showModal = false"/>
            <div class="bg-white z-50 fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-3/6 h-5/6 rounded-md">
                <button 
                    class="btn-link fixed right-5 top-5"  
                    @click="showModal = false"
                > 
                    <Icon name="mdi:close" size="25"/> 
                </button>
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    const showModal = defineModel('showModal', {default: false, required: true});
</script>

