import {create} from 'zustand';

const useUserStore = create((set) => ({
  zuUsername: '',
  zuSetUsername: (username) => set({ zuUsername : username }),
}));


export default useUserStore;