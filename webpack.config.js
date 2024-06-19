const path = require("path");

module.exports = {
  entry: "./src/index.js", // This can be .js or .tsx depending on your main file

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions along with '.js' and '.jsx'.
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        // Set up babel-loader to process JavaScript and TypeScript files
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        // CSS Loader setup
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Optional: Add loaders for images, fonts, etc. as needed
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  // Optional: Configure the webpack dev server
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000, // You can specify another port here
  },
};

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: path.join(__dirname, "src", "index.js"),
//   output: {
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         exclude: /node_modules/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, "src", "index.html"),
//     }),
//   ],
// };
