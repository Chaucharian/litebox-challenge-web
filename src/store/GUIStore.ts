import { create, StateCreator } from "zustand";

// Define the type for the slice that manages the deck image URL
interface GUIState {
  deckImageUrl: string;
  levaEnabled: boolean;
  fields: {
    [x: string]: { value: any; type: string };
    // pliesPosition: number;
    // pliesColors: number[];
    // rotation: number[];
    // surfaceType: string;
    // scale: number;
    // upDown: number;
    // leftRight: number;
  };
  changeField: (fieldKey: string, field: any) => void;
  createForm: (fields: any) => void;
  setDeckImageUrl: (url: string) => void;
}

const initialFields = {
  showAccesories: {
    value: false,
    type: 'switch'
  },
  pliesPosition: {
    value: 1.27,
    min: 1.27,
    defaultValue: 1.27,
    moveTo: 30,
    delay: 0.4,
    type: "slider",
  },
  pliesColors: {
    value:  ['#ffffff', '#ab3f1d', '#45ad93', '#6b3c2d', '#ffffff'],
    type: "colors",
  }, // black looks good 0xff0000
  deckImage: { value: "textures/wood_color.jpg", type: "file" },
  rotation: { value: 0, min: 0, max: 360, type: "slider" },
  scale: { value: 1.8, min: 1, max: 10, type: "slider" },
  upDown: { value: 2,   min: -100, max: 100, type: "slider" },
  leftRight: { value: 0,  min: -100, max: 100, type: "slider" },
  surfaceType: { value: "shiny", type: "none" },
};

// Now create the slice for GUIState
const createGUISlice: StateCreator<GUIState, [], [], GUIState> = (set) => ({
  levaEnabled: false, // process.env.NODE_ENV === 'development' ? true : false,
  fields: initialFields,
  changeField: (fieldKey: string, newValue: any) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [fieldKey]: { ...state.fields[fieldKey], value: newValue },
      },
    })),
  createForm: (fields: any) =>
    set(() => ({
      fields,
    })),
  // TODO
  // remove deprecated by new form fields mechanisms
  deckImageUrl: "textures/wood_color.jpg", // default value for the deck image URL
  setDeckImageUrl: (url: string) => set(() => ({ deckImageUrl: url })),
});

// Create the store using Zustand with the GUI slice
export const useGUIStore = create<GUIState>()((...a) => ({
  ...createGUISlice(...a),
}));
