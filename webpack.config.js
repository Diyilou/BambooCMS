var config = {
   entry: './src/js/admin.js',

   output: {
      path:'./public/js/',
      filename: 'admin.js',
   },

   devServer: {
      inline: true,
      port: 7777
   },

   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
            presets: ['es2015', 'react']
         }
      }]
   }

};

module.exports = config;
