var config = {
   entry: {
    'admin' : './src/js/admin.js',
    'business' : './src/js/business.js'
   },

   output: {
      path:'./public/js/',
      filename: '[name].js',
      chunkFilename: '[name].js'
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
