import { InitiationController } from "./controller";
import { Npm } from "./npm";
import { workspacesController } from "../workspaces";

const npm = new Npm();
export const initController = new InitiationController(npm, workspacesController);