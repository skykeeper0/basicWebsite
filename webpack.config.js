module.exports = {
    entry: './main.js', // name of the top level file you want to include
    output: {
        filename: 'bundle.js' // the file you want webpack to build
    },
    watch: true, // watch your files and when one of them changes, it will
    // immediately rerun the build and recreate the output files
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [ // loaders allow you to preprocess files as you require() or 'load' them. 
            {
                test: /\.es6$/, //test what kind of files to run through this loader
                exclude: /node_modules/, //which files the loader should ignore
                loader: 'babel-loader', // the nmae of loader we are going to use
                query: {   // pass option to loader by writing them as a query string
                    presets: ['react','es2015']
                }
            }
        ]
    },
    resolve: {  // let us specify what kind of file type we can process without specifically giving them a file extension
        extensions: ['','.js','.es6']
    },
}