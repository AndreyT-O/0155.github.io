<script setup>
    import { useProfileData } from '@/stores/profileData';
    import { storeToRefs } from 'pinia';

    import SvgIcon from './SvgIcon.vue';
    import ChatBlock from './ChatBlock.vue';
    import ChatForm from './ChatForm.vue';

    const data = useProfileData();
    const { info } = storeToRefs(data);
    const { like, comment  } = info.value.chat;

</script>

<template>
    <div class="chat container">
        <div class="chat__head">
            <span class="chat__text title">Latest reviews</span>
            <a href="" class="chat__link" target="_blank">All reviews</a>
            <div class="chat__box">
                <div class="chat__inner">
                    <SvgIcon class="chat__icon" name="like" />
                    <span>{{ like }}</span>
                </div>
                <div class="chat__inner">
                    <SvgIcon class="chat__icon" name="comment" />
                    <span>{{ comment }}</span>
                </div>
            </div>    
        </div>
        <ChatBlock class="chat__chat-block" />
        <ChatForm class="chat__chat-form" />
    </div>
</template>

<style lang="scss">
    @import '@scss/components/chat.scss';
</style>