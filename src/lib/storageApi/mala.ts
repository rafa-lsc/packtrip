
import { ItemListType } from "@/lib/data";

const STORAGE_KEY = "packtrip_mala_virtual";

export const malaAPI = {
  get(): ItemListType[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  create(item: ItemListType): void {
    const current = malaAPI.get();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, item]));
  },

  update(updatedItem: ItemListType): void {
    const updated = malaAPI.get().map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  },

  delete(id: string): void {
    const filtered = malaAPI.get().filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },
};
