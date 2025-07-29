
import { ViagemData } from "@/lib/data";

const STORAGE_KEY = "packtrip_viagens";

export const viagemAPI = {
  get(): ViagemData[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  create(item: ViagemData): void {
    const current = viagemAPI.get();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, item]));
  },

  update(updatedItem: ViagemData): void {
    const updated = viagemAPI.get().map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  },

  delete(id: string): void {
    const filtered = viagemAPI.get().filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },
};
