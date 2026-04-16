console.log("Image Filter Extension ACTIVE");

// Get current config from background
chrome.runtime.sendMessage({ type: "GET_CONFIG" }, (config) => {
  if (!config || !config.blocked) return;

  const blocked = config.blocked;

  const url = window.location.href.toLowerCase();

  const isBlocked = blocked.some(keyword =>
    url.includes(keyword.toLowerCase())
  );

  if (isBlocked) {
    console.log("Blocked query detected. Redirecting...");

    window.stop();
    window.location.replace("https://www.google.com");
  }
});