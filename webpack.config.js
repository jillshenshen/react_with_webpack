const path = require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin');

module.exports = {

	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
    devServer:{
        port:3000,
      
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
					},
				},
			},
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]

                
            }
		],
	},
};