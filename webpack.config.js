const path = require('path');

module.exports =  {
    mode : "production",
    module : {
         rules : [
            {
                test:/\.css$/,
                use :["style-loader" , "css-loader"]

            },

            {
                test:/\.html$/,
                use :["html-loader"]

            },

            {
                test : /\.js$/,
                use : ["babel-loader"]
            }
        ]
    }
}