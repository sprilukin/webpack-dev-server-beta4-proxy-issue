module.exports = [
    {
        entry: {
            'entry1': './src/entry1'
        },
        devServer: {
            proxy: {
                '*': {
                    target: "http://localhost:8080",
                    bypass: function (req) {
                        return req.url;
                    }
                }
            }
        }
    },
    {
        entry: {
            'entry2': './src/entry2'
        }
    }
];


