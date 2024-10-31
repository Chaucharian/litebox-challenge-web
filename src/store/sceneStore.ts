import { create, StateCreator } from 'zustand';

// Define the type for the camera shot state and actions

export type Stage = 'idle' | 'plies' | 'artwork' | 'size' | 'quantity'
interface SceneState {
  stage: Stage
  isCameraShotActive: boolean;
  isAnimateEnvironment:boolean
  cameraRef: null;
  setCameraShot: (isActive: boolean) => void;
  setCameraRef: (ref: any) => void;
  changeStage: (stage: Stage) => void;
}

// Create the slice for SceneState
const createSceneSlice: StateCreator<SceneState, [], [], SceneState> = (set) => ({
  stage: 'idle',
  isAnimateEnvironment: false,
  cameraRef: null,
  setCameraRef: (cameraRef: any) => set(() => ({ cameraRef })),
  isCameraShotActive: false, // default value for the camera shot state
  setCameraShot: (isActive: boolean) => set(() => ({ isCameraShotActive: isActive })),
  changeStage: (stage: Stage) => set(() => ({ stage })),
});

// Create the store using Zustand with the Scene slice
export const useSceneStore = create<SceneState>()((...a) => ({
  ...createSceneSlice(...a),
}));
