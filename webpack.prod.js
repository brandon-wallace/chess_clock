const path = require("path");


module.exports = {
  entry: {
    main: ["./src/index.js"]
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
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
        test: /\.(ttf|otf)$/,
        loader: [
          "url-loader"
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
        test: /\.(jpe?g|png|gif|ico|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]",
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
