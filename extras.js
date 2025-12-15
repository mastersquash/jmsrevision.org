// -------------------- ENCRYPTED RESOURCES --------------------
const encryptedResources = [
  { title: "TWluZWNyYWZ0", url: "aHR0cHM6Ly9lYWdsZXJjcmFmdHgucGFnZXMuZGV2" }, // Mc
  { title: "Rk5hRg==", url: "aHR0cHM6Ly90cnVmZmxlZC5sb2wvZ2FtZXMvZm5hZi9pbmRleC5odG1s" }, // F
  { title: "RG9vbQ==", url: "aHR0cHM6Ly90cnVmZmxlZC5sb2wvZ2FtZXMvZG9vbS9pbmRleC5odG1s" }, // Dom
  { title: "U3VwZXIgTWFyaW8gNjQ=", url: "aHR0cHM6Ly9yZWMwZGVkODguY29tL3dwLWNvbnRlbnQvZW11L2h0bWwvcGxheS1uNjQtZ2FtZXMuaHRtbD9nYW1lTmFtZT1TdXBlciUyME1hcmlvJTIwNjQuanBpbiZnYW1lSUQ9MTI0NA==" }, // sm
  { title: "TW9ydGFsIEtvbWJhdCBUaHJpbGxleQ==", url: "aHR0cHM6Ly9yZWMwZGVkODguY29tL3dwLWNvbnRlbnQvZW11L2h0bWwvcGxheS1wbGF5c3RhdGlvbi5odG1sP2dhbWVOYW1lPU1vcnRhbCUyMEtvbWJhdCUyMFRocmlsbHkuY2hkJmdhbWVJRD00MTIx" } // mkt
];

// -------------------- HELPER --------------------
function decodeBase64(str) {
  return atob(str);
}

// -------------------- UNLOCK INPUT --------------------
function createInputBar() {
  const inputBar = document.createElement("input");
  inputBar.type = "text";
  inputBar.placeholder = "Enter game title...";
  inputBar.id = "resourceInput";
  inputBar.style.position = "fixed";
  inputBar.style.bottom = "20px";
  inputBar.style.left = "50%";
  inputBar.style.transform = "translateX(-50%)";
  inputBar.style.padding = "8px 12px";
  inputBar.style.border = "1px solid #333";
  inputBar.style.borderRadius = "4px";
  inputBar.style.backgroundColor = "#111";
  inputBar.style.color = "#fff";
  inputBar.style.zIndex = "9999";
  inputBar.style.opacity = "0.8";
  document.body.appendChild(inputBar);

  let flashTimeout;
  let currentMatch = null;

  inputBar.addEventListener("input", () => {
    const val = inputBar.value.trim();
    currentMatch = encryptedResources.find(r => decodeBase64(r.title).toLowerCase() === val.toLowerCase());
    if (currentMatch) {
      // Flash green
      inputBar.style.backgroundColor = "#0f0";
      clearTimeout(flashTimeout);
      flashTimeout = setTimeout(() => {
        inputBar.style.backgroundColor = "#111";
      }, 200);
    }
  });

  inputBar.addEventListener("keydown", (e) => {
    if (currentMatch && e.altKey && e.key === "Enter") {
      // Launch resource in iframe tab
      openContent(decodeBase64(currentMatch.url));
      inputBar.value = "";
    }
  });
}

// -------------------- OPEN RESOURCE --------------------
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

// -------------------- WAIT FOR UNLOCK --------------------
let checkUnlock = setInterval(() => {
  if (window.unlocked) {
    clearInterval(checkUnlock);
    createInputBar();
  }
}, 500);
