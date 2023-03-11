<script setup>
    import { defineProps } from 'vue';
    import { useProfileData } from '@/stores/profileData';
    import { storeToRefs } from 'pinia';

    const data = useProfileData();
    const { info } = storeToRefs(data);
    const { items, total } = info.value.services;

</script>

<template>
    <ul class="services">
        <li class='services__head'>
            <span class='services__title'>Services</span>
        </li>
        <li 
            class="services__info" 
            v-for="(data, index) of items" 
            :key="index"
            :style="{'--interest': data.interest + '%'}"
            >
            <span class='services__name'>{{ data.name }}</span>
            <span class='services__result'>{{ data.amount }}</span>
        </li>
        <li className='services__foot'>
            <span className='services__total'>
                Total
            </span>
            <span className='services__amount'>
                {{ total }}
            </span>
        </li>
    </ul>
</template>

<style lang="scss">
    @import '@scss/components/services.scss';
</style>