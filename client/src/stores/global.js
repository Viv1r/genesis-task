import { defineStore } from 'pinia';
import axios from 'axios';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    items: [],
    activeType: undefined,
    loading: false,
    typeList: [
      {
        name: 'Сделка',
        value: 'leads'
      },
      {
        name: 'Контакт',
        value: 'contacts'
      },
      {
        name: 'Компания',
        value: 'companies'
      }
    ]
  }),

  actions: {
    async addItem() {
      if (this.loading) return;
      this.loading = true;

      const type = this.activeType;
      if (!type) return;

      const URL = `api/${type.value}/create`;

      const response = await axios.post(URL);
      const data = response.data;
      if (data.items) {
        for (let item of data.items) {
          this.items.push({
            id: item.id,
            name: type.name
          });
        }
        
        this.loading = false;
        sessionStorage.setItem('items', JSON.stringify(this.items));
      }
    },

    loadItems() {
      const items = JSON.parse(
        sessionStorage.getItem('items')
      );
      if (items) {
        this.items = items;
      } else {
        sessionStorage.removeItem('items');
      }
    },

    setActiveType(newType) {
      this.activeType = newType;
    }
  }
})