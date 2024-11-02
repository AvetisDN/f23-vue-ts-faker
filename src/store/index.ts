import { defineStore } from "pinia";
import { generateFakeData, Item } from "../models/items.model";

export type RootState = {
  items: Item[];
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      items: [],
    } as RootState),
  actions: {
    getIndexByID(id: string) {
      return this.items.findIndex((item) => item.id === id);
    },
    createItem(item: Item) {
      this.items.push(item);
    },
    updateItem(id: string, payload: Item) {
      const index = this.getIndexByID(id);
      //   this.items[index] = payload;
      this.items[index] = generateFakeData();
    },
    deleteItem(id: string) {
      const index = this.getIndexByID(id);
      // this.items[index].deletedAt = new Date();
      this.items.splice(index, 1);
    },
  },
});
