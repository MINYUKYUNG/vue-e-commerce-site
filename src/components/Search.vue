<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { ProductGuard } from '../utils/type';

const result = ref([]);
const store = useStore();

const all = computed(() => store.state.goods.all);

const search = (e: Event) => {
  const input = (e.target as HTMLInputElement).value;
  if (input === '') {
    result.value = [];
    return result.value;
  }

  result.value = all.value.filter((
    item: ProductGuard,
  ) => item.title.toLowerCase().indexOf(input.toLowerCase()) > -1);
};
</script>

<template>
  <div class="dropdown">
    <input
      type="text"
      placeholder="검색"
      class="input max-w-xs bg-gray-300 flex-none ml-5 mr-1 dark:text-white dark:bg-gray-600
      focus:outline-0"
      @input="search"
    />
    <ul
      class="dropdown-content menu shadow bg-base-100 w-full flex-none ml-5 dark:text-white left-0
      mt-2 max-h-96 overflow-y-auto"
    >
      <li v-for="{ id, title } in result" :key="id" @click="() => result = []">
        <RouterLink :to="'/products/' + id">
          <span class="line-clamp-2">{{ title }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
