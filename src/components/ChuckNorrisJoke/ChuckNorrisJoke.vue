<template>
    <div v-if="data">
        {{ data.value }}
    </div>
</template>

<script setup lang="ts">
import { useChuckNorrisRandomJoke } from "@/services/useChuckNorrisJokes";
import { onMounted } from "vue";
const { data, refetch } = useChuckNorrisRandomJoke();

onMounted(() => refetch());
</script>