const requestHandler = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Homepage</title></head>');
    res.write('<body><h1>Homepage</h1></body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === '/message' && req.method === 'POST') {
    // Example POST route
    console.log('POST /message');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  } else {
    // All other routes
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Catchall</title></head>');
    res.write('<body><h1>Catchall Route</h1></body>');
    res.write('</html>');
    return res.end();
  }
};

module.exports = requestHandler;
