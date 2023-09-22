import {create} from 'zustand';

const useUserStore = create((set) => ({
  zuUsername: '',
  zuSetUsername: (username) => set({ zuUsername : username }),
  zuXP: 0, // New state variable to hold XP
  zuSetXP: (xp) => set({ zuXP: xp }), // Function to set X
}));


export default useUserStore;