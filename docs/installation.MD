
1. Put the folder on ur server machine
2. Install Node.js and the module<br>
<code> $ npm - install node.js, express, iosockets</code><br>
3. Go to <a href="#">ngrok</a> and create u r account for make a tunnel with ur application (if you don't have a server but <a href="#">heroku</a> is free)
4. Go to public/index.html and modify the adress for socket client  <code>var socket = io.connect('http://1264ca60.ngrok.io:80');</code>
5. Config the ddb mysql if you want save if server crash: go to server.js header
4. Launch the application
<code>$ node server.js</code><br>

Great !




