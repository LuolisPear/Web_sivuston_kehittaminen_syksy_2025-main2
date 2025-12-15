# Running the Website Locally

Ruffle (Flash emulator) requires a web server to work properly. You cannot open the HTML files directly using `file://` protocol.

## Option 1: Python HTTP Server (Recommended - Easiest)

If you have Python installed:

1. **Windows**: Double-click `server.bat`
2. **Mac/Linux**: Run `python3 server.py` in the terminal

The server will start at `http://localhost:8000` and your browser should open automatically.

## Option 2: Python Simple Server (Alternative)

If the above doesn't work, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/index.html` in your browser.

## Option 3: Node.js Server

If you have Node.js installed:

1. Open a terminal in this folder
2. Run: `node server.js`
3. Open `http://localhost:8000/index.html` in your browser

## Option 4: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Stopping the Server

Press `Ctrl+C` in the terminal where the server is running.

---

**Note**: Make sure to access the website through `http://localhost:8000` and NOT by opening the HTML files directly!

