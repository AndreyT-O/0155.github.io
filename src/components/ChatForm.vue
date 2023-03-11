<script setup>
    import { ref, watch } from 'vue';
    import { useProfileData } from '@/stores/profileData';
    import { storeToRefs } from 'pinia';
    import { Field, Form, ErrorMessage  } from 'vee-validate';
    import * as yup from 'yup';
    import { timezone } from '@/scripts/timezone';

    const data = useProfileData();
    const { info } = storeToRefs(data);
    const { name, chat } = info.value;


    const textarea = ref('');

    function submitHandle(e) {
        if(!!e.textarea && e.textarea?.trim().length > 0) {
            chat.messages.push({
                name: name,
                date: timezone(),
                text: textarea.value
            });

            textarea.value = '';
        }
    }

</script>

<template>
    <Form class="chat-form" @submit="submitHandle" v-slot="error">
        <Field as="textarea" name="textarea" class="chat-form__textarea" :class="{'error': error.meta.touched && !error.values.textarea}" v-model="textarea"/>
        <button type="submit" class="chat-form__button">
            <span class="chat-form__text">Send a message</span>
        </button>
    </Form>
</template>

<style lang="scss">
    @import '@scss/components/chat-form.scss';
</style>