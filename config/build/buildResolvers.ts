import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/config";


export const buildResolvers = (paths: BuildPaths): ResolveOptions => ({
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
});