<template>
  <div class="container">
    <DropdownList
      :options="globalStore.typeList"
      :placeholder="'Не выбрано'"
      @input="val => globalStore.setActiveType(val)"
    />
    <Button
      :condition="globalStore.activeType"
      :loading="globalStore.loading"
      @action="globalStore.addItem()"
    >
      Создать
    </Button>
    <ResultList/>
  </div>
</template>

<script>
import { useGlobalStore } from '@/stores/global.js';
import { mapStores } from 'pinia';
import DropdownList from './components/DropdownList/DropdownList.vue';
import Button from './components/Button/Button.vue';
import ResultList from './components/ResultList/ResultList.vue';

export default {
  components: {
    DropdownList,
    Button,
    ResultList
  },
  computed: {
    ...mapStores(useGlobalStore)
  },
  mounted() {
    this.globalStore.loadItems();
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    padding: 50px;
    width: fit-content;
    min-width: 300px;
    max-width: 100vw;
    height: fit-content;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    border-radius: 16px;
    box-shadow: 2px 2px 8px rgba($color: #000000, $alpha: .25);

    .button {
      margin-right: auto;
    }
  }
</style>