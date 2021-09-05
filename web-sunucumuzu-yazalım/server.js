const http = require('http');
x= 0;

const server = http.createServer((req,res)=>{
    const url = req.url;
    console.log(`Total Request: ${x += 1}`);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    switch(url){
        case('/'): {
          res.write('<h2>Index Sayfasına Hoşgeldin </h2>','utf-8');
          res.end();
          break;
        }
        case('/hakkimda'): {
          res.write('<h2>Hakkımda Sayfasına Hoşgeldin </h2>','utf-8');
          res.end();
          break;
        }
        case('/iletisim'):{
          res.write('<h2>İletişim Sayfasına Hoşgeldin </h2>','utf-8');
          res.end();
          break;
        }
        default:{
            res.write('<h2>Aradığın Sayfa Bulunamadı!</h2>');
            res.end();
        }
    }
});

const port = 5000;
server.listen(port,()=>{
    console.log(`Server port ${port}`);
});