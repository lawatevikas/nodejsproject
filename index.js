const http=require('http')
http.createServer((req,resp)=>{
resp.write("<h1>hello This is vikas lawate </h1>")
resp.end();
}).listen(3500);