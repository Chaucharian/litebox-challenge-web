import { create, StateCreator } from 'zustand';

// Define the type for the camera shot state and actions

export interface ConfigState {
  baseUrl: string;
  theme: string;
  product: any;
  controlsType: string;
  changeBaseUrl: (url: string) => void;
  changeTheme: (theme: string) => void;
  changeProduct: (product: any) => void;
  changeControlsType: (type: string) => void;
}

// Create the slice for SceneState
const createConfigSlice: StateCreator<ConfigState, [], [], ConfigState> = (set) => ({
  baseUrl: '',
  theme: 'light', // Default theme
  product: {},
  controlsType: 'orbit', // Default controls type
  changeBaseUrl: (url: string) => set(() => ({ baseUrl: url })),
  changeTheme: (theme: string) => set(() => ({ theme })),
  changeProduct: (product: any) => set(() => ({ product })),
  changeControlsType: (type: string) => set(() => ({ controlsType: type })),
});

// Create the store using Zustand with the Scene slice
export const useConfigStore = create<ConfigState>()((...a) => ({
  ...createConfigSlice(...a),
}));
