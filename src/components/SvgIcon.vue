<script setup>
  import { computed, defineProps } from 'vue';
    
  const props = defineProps({
    prefix: {
        type: String,
        default() {
            return 'icon';
        }
    },
    name: {
        type: String,
        required: true
    }
  }),
  symbolId = computed(() => `#${props.prefix}-${props.name}`);
  
</script>

<template>
    <svg aria-hidden="true">
        <use :href="symbolId" />
    </svg>
</template>