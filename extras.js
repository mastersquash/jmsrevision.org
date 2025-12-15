// Stealth resources list
const resourcesList = [
  { title: "Minecraft", url: "https://eaglercraftx.pages.dev" },
  { title: "FNaF", url: "https://truffled.lol/games/fnaf/index.html" },
  { title: "Doom", url: "https://truffled.lol/games/doom/index.html" },
  { title: "Super Mario 64", url: "https://rec0ded88.com/wp-content/emu/html/play-n64-games.html?gameName=Super%20Mario%2064.zip&gameID=1244" },
  { title: "Mortal Kombat Trilogy", url: "https://rec0ded88.com/wp-content/emu/html/play-playstation.html?gameName=Mortal%20Kombat%20Trilogy.chd&gameID=4121" }
  // ...add the rest discreetly
];

// Opens Resource Viewer tab
function openContent(url) {
  const win = window.open("", "_blank");
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Resource Viewer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        html, body { margin:0; height:100%; }
        iframe { width:100%; height:100%; border:none; }
      </style>
    </head>
    <body>
      <iframe src="${url}"></iframe>
    </body>
    </html>
  `);
  win.document.close();
}

// Example: hook into select & release trigger
// Wait for content.js to unlock
let checkUnlock = setInterval(() => {
  if (window.unlocked) {
    clearInterval(checkUnlock);
    // Open first resource for testing (or call dynamically)
    openContent(resourcesList[0].url);
  }
}, 500);
