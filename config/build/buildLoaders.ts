import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    };

    return [
        tsLoader,
        stylesLoader,
    ]
};