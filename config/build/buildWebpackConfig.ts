import webpack from "webpack";

import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(),
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        resolve: buildResolvers(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths),
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};