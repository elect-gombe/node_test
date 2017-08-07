// httpモジュールを読み込み、インスタンスを生成
var http = require('http');
var fs = require('fs');

// HTTPサーバーのイベントハンドラを定義
http.createServer(function (req, res) {
    fs.readFile('index.html', 'utf-8',function(err,data) {
        if(err){
            res.writeHead(404,{'content-Type': 'text/plain'});
            res.write("not found");
            return res.end();
	}
	res.writeHead(200,{'content-Type': 'text/html'});
	res.write(data);
	res.end();
    });
}).listen(1337, '127.0.0.1'); // 127.0.0.1の1337番ポートで待機
