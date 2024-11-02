<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMainStore } from "./store";
import { onMounted } from "vue";
import { generateFakeData } from "./models/items.model";

const store = useMainStore();

const { createItem, updateItem, deleteItem } = useMainStore();

const { items } = storeToRefs(store);

onMounted(() => {
  for (let c = 0; c < 10; c++) {
    createItem(generateFakeData());
  }
});
</script>

<template>
  <div>
    {{ items }}
  </div>
</template>

<style scoped></style>
