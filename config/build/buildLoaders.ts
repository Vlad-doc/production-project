import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import { BuildOptions } from "./types/config";

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => !!resourcePath.includes(".module.scss"),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:7]"
                            : "[hash:base64:7]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [typescriptLoader, cssLoader, svgLoader, fileLoader];
};
