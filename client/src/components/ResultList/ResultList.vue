<template>
    <div v-if="globalStore.items.length" class="result_list">
        Результаты:
        <div class="items_wrapper">
            <div v-for="item in globalStore.items" class="item">
                <div class="title">{{ item.name }}</div>
                ID: {{ item.id }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useGlobalStore } from '@/stores/global';

export default {
    computed: {
        ...mapStores(useGlobalStore)
    }
}
</script>

<style src="./ResultList.scss" scoped></style>