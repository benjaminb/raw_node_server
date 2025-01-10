# raw_node_server
Node server template with basic routing implemented with only the http module (no Express). 

## Usage
1. Run `docker build -t <tagname> .` from the project root directory to build the image.
1. Run `docker run -p 3000:3000 <tagname>` to launch the container. The server will be accessible at `localhost:3000`
