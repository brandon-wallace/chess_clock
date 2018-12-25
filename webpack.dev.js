const path = require("path");


module.exports = {
  entry: {
    main: ["./src/index.js"]
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    watchContentBase: true,
    overlay: true
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [{
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },
      {
        // test: /\.(jpe?g|png|gif|svg)$/i,
        //     use: [
        //       'file-loader?name=[name].[ext]&publicPath=./&outputPath=./images/',
        //       'image-webpack-loader'
        //     ]
        test: /\.(jpg|png|gif|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "./images/[name].[ext]",
            // outputPath: 'images'
          }
        }]
      },
      {
        test: /\.(mp3|wav)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "audio/[name].[ext]"
          }
        }]
      }
    ]
  }
}
