<script setup>
    import { ref, watch } from 'vue';
    import { useProfileData } from '@/stores/profileData';
    import { storeToRefs } from 'pinia';

    const data = useProfileData();
    const { info } = storeToRefs(data);
    const { messages } = info.value.chat;

    const parent = ref(null);

    watch(messages, () => {
        const parentNative = document.getElementsByClassName('chat-block')[0];
        
        setTimeout(() => {
            parent.value.scrollTo({
                top: 1000,
                behavior: "smooth"
            });
        }, 0);
        
    });
    
</script>

<template>
    <div class="chat-block" ref="parent">
        <div class="chat-block__inner" v-for="(data, index) of messages" :key="index">
            <div class="chat-block__box">
                <span class="chat-block__name title">{{ data.name }}</span>
                <span class="chat-block__date">{{ data.date }}</span>
            </div>
            <div class="triangle"></div>
            <p class="chat-block__text">
                {{ data.text }}
            </p>
        </div>
    </div>
</template>

<style lang="scss">
    @import '@scss/components/chat-block.scss';
</style>