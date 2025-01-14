import {
  WidgetLocation,
  declareIndexPlugin,
  ReactRNPlugin,
} from "@remnote/plugin-sdk";
import { getOrCreateHomeWorkspace } from "../shared";
import "../style.css";

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerPowerup("workspace", "workspace", "workspace", {
    slots: [
      { code: "windowTree", name: "Window Tree" },
    ],
  });

  await plugin.app.registerWidget("tabs", WidgetLocation.TopBar, {
    dimensions: { height: "auto", width: "100%" },
  });

  // await plugin.app.registerSidebarButton({
  //   id: "home",
  //   name: "Home",
  //   action: async () => {
  //     plugin.window.openRem((await getOrCreateHomeWorkspace(plugin))!);
  //   },
  // });

  await getOrCreateHomeWorkspace(plugin);
}

async function onDeactivate() {}

declareIndexPlugin(onActivate, onDeactivate);
