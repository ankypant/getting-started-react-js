import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// useCounterStore is a custom hook that allows us to access the counter store
// "set" is used to update the state
export const useCounterStore = create<CounterStore>()(
  devtools(
    (set) => ({
      // initial state
      count: 0,
      // actions
      increment: () =>
        set((state) => ({ count: state.count + 1 }), false, 'increment'),
      decrement: () =>
        set((state) => ({ count: state.count - 1 }), false, 'decrement'),
      reset: () => set({ count: 0 }, false, 'reset'),
    }),
    { name: 'CounterStore' }
  )
);
