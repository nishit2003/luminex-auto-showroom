import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

interface EnquiryItem {
  product: Product;
  addedAt: Date;
}

interface EnquiryStore {
  items: EnquiryItem[];
  addItem: (product: Product) => void;
  removeItem: (productCode: string) => void;
  clearAll: () => void;
  getTotalCount: () => number;
}

export const useEnquiryStore = create<EnquiryStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        const items = get().items;
        const existingItem = items.find(item => item.product.code === product.code);
        
        if (!existingItem) {
          set({
            items: [...items, { product, addedAt: new Date() }]
          });
        }
      },
      
      removeItem: (productCode: string) => {
        set({
          items: get().items.filter(item => item.product.code !== productCode)
        });
      },
      
      clearAll: () => {
        set({ items: [] });
      },
      
      getTotalCount: () => {
        return get().items.length;
      },
    }),
    {
      name: 'luminex-enquiry-storage',
    }
  )
);