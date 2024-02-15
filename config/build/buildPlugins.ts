import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { BuildPaths } from "./types/config";

export const buildPlugins = (paths: BuildPaths): webpack.WebpackPluginInstance[] => [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        template: paths.html,
    }),
];