var fs = require('fs')
var http = require('http')
var atr = [
    'arcoiris_doge',
    'badboy_doge',
    'code_doge',
    'resaca_doge',
    'retrato_doge',
    'sexy_doge'
]
http.createServer((req,res) => {
    var r = req.url
    var images = {'Content-type': 'image/jpg'}
    if (r === '/'){
        res.writeHead(200, {'Content-type':'text/plain'})
        res.end('hola')
    }
    else if (r === )
})