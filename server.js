var express = require('express');
var path = require('path');
var webpack = require('webpack');
var app = express();
var config = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');

var port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  var static_path = path.join(__dirname, 'public');

  app.use(express.static(static_path))
    .get('/', function (req, res) {
      res.sendFile('index.html', {
        root: static_path,
      });
    }).listen(process.env.PORT || 8080, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Listening at localhost:', process.env.PORT);
      }
    });
} else {


  new WebpackDevServer(webpack(config), {
      hot: true,
      historyApiFallback: true,
      proxy: {
        '*': 'http://localhost:3000',
      },
    }).listen(3001, 'localhost', function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Listening at localhost:3001');
      }

    });

  app.listen(port);
}

app.get('/images', function(req, res) {
  var kathybeatz = {
    "glossary": {
        "title": "example glossary",
    "GlossDiv": {
            "title": "S",
      "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
          "SortAs": "SGML",
          "GlossTerm": "Standard Generalized Markup Language",
          "Acronym": "SGML",
          "Abbrev": "ISO 8879:1986",
          "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
            "GlossSeeAlso": ["GML", "XML"]
                    },
          "GlossSee": "markup"
                }
            }
        }
    }
}
  res.send(kathybeatz);
})