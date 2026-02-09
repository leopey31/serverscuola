import json, sqlite3
from http.server import BaseHTTPRequestHandler, HTTPServer

class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/studenti':
            conn=sqlite3.connect('database.sqlite')
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            cur.execute("SELECT * FROM studenti")
            rows = [dict(r) for r in cur.fetchall()]
            conn.close()
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(rows).encode())

server = HTTPServer(('localhost', 8000), MyHandler)
print('Server su http://localhost:8000')
server.serve_forever()