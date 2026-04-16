let config = {
  blocked: []
};

// Load JSON config from extension package
async function loadConfig() {
  try {
    const url = chrome.runtime.getURL("config/keywords.json");
    const res = await fetch(url);
    config = await res.json();
    console.log("Config loaded:", config);
  } catch (err) {
    console.error("Failed to load config:", err);
  }
}

// Initial load
loadConfig();

// Optional: refresh periodically (useful when editing file)
setInterval(loadConfig, 60000);

// Respond to content script requests
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_CONFIG") {
    sendResponse(config);
  }
  return true;
});