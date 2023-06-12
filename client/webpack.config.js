const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
 
module.exports = { 
  entry: './src/index.tsx', 
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js', 
  }, 
  module: { 
    rules: [ 
      { 
        test: /\.scss$/, 
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash^base64:5]',
              },
            },
          },
          'sass-loader',
        ], 
      },
      { 
        test: /\.(js|jsx|ts|tsx)$/, 
        exclude: /node_modules/, 
        use: 'ts-loader', 
      }
    ], 
  }, 
  resolve: { 
    extensions: ['.js', '.jsx', '.ts', '.tsx'], 
  }, 
  plugins: [ 
    new HtmlWebpackPlugin({ 
      template: './src/index.html', 
    }), 
  ], 
  devServer: { 
    static: { 
      directory: path.join(__dirname, 'dist'), 
    }, 
    hot: true, 
    compress: true, 
    port: 3000, 
  }, 
};
