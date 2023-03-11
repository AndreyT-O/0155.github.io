<script setup>
    import { useProfileData } from '@/stores/profileData';
    import { storeToRefs } from 'pinia';

    import Services from './Services.vue';

    const data = useProfileData();
    const { info } = storeToRefs(data);
    const { profile, name, position, shortInfo } = info.value;

</script>

<template>
    <div class="profile container">
        <picture class="profile__picture">
            <img
                :src="profile"
                alt=""
                class="profile__img"
                width=""
                height=""
                decoding="async"
            />
        </picture>
        <div class="profile__box">
            <div class="profile__inner">
                <span class="profile__name title">
                    {{ name }}
                </span>
                <span class="profile__position">
                    {{ position }}
                </span>
                <div class="profile__short-message">
                    <span 
                    className="profile__text standard-text"
                    v-for="(text, index) of shortInfo"
                    :key="index"
                    >
                        {{ text }}
                    </span>
                </div>
            </div>
            <Services class="profile__services" />
        </div>
    </div>
</template>

<style lang="scss">
    @import '@scss/components/profile.scss';
</style>