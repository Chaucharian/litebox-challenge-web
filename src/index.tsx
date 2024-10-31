import App from "./App";
import { createRoot } from "react-dom/client";
import { useConfigStore } from "@store/configStore";

/**
 * Render the application to a specified root element.
 * @param {Object} options - Options for rendering the app.
 * @param {string} options.rootNodeId - The ID of the DOM element where the app will be mounted.
 * @param {Object} options.appProps - Additional props to be passed to the App component.
 */
const renderApp = ({ rootNodeId = "root", ...rest } = {}) => {
  const domNode = document.getElementById(rootNodeId);
  if (!domNode) {
    console.error(
      `Element with id '${rootNodeId}' not found. Unable to render the app.`
    );
    return;
  }

  const root = createRoot(domNode);
  root.render(<App {...rest} />);
};

export interface initDisplayItOptions {
  [k: string]: any;
}

/**
 * Initialize the application with dynamic configurations.
 * @param {Object} config - Configuration options for initializing the app.
 * @param {string} config.baseUrl - Base URL for the application.
 * @param {string} [config.theme] - Optional theme configuration.
 * @param {string} [config.controlsType] - Type of controls for 3D interaction (e.g., 'orbit', 'trackball').
 * @param {Function} [config.onBeforeRender] - Callback function to be executed before the app renders.
 * @param {Function} [config.onAfterRender] - Callback function to be executed after the app renders.
 * @param {Object} [config.appProps] - Additional props to pass into the App component.
 */
export const initDisplayIt = ({
  baseUrl,
  theme = "default",
  product = {},
  controlsType = "orbit",
  rootNodeId = 'root', 
  isDev,
  size,
  width,
  height,
  backgroundColor,
  onBeforeRender,
  onAfterRender,
}: initDisplayItOptions) => {
  // Update the configuration store with initial values
  useConfigStore.getState().changeBaseUrl(baseUrl);
  useConfigStore.getState().changeTheme(theme);
  useConfigStore.getState().changeProduct(product);
  useConfigStore.getState().changeControlsType(controlsType);

  // Execute onBeforeRender callback if provided
  if (onBeforeRender && typeof onBeforeRender === "function") {
    onBeforeRender();
  }

  // Render the app
  renderApp({ isDev, size, width, height, backgroundColor, rootNodeId });

  // Execute onAfterRender callback if provided
  if (onAfterRender && typeof onAfterRender === "function") {
    onAfterRender();
  }
};

// Automatically render the app in development mode with default settings
if (import.meta.env.MODE === "development") {
  initDisplayIt({
    // baseUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
    // baseUrl: 'https://marplacode.myshopify.com/apps/assets',
    // Empty in order to use local assets
    baseUrl: "",
    theme: "dark",
    controlsType: "orbit",
    isDev: true,
    size: "500px",
  });
}

window.initDisplayIt = initDisplayIt;
