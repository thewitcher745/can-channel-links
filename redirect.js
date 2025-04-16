window.onload = function () {
  const linkDictionary = require("./links.json");

  // Get the start_param from URL parameters
  const urlParams = new URLSearchParams(window.Telegram.WebApp.initData);
  const startParam = urlParams.get("start_param");

  // Navigate to the corresponding link if it exists in the dictionary
  if (startParam && linkDictionary[startParam]) {
    const link = linkDictionary[startParam];

    const channelLinkElement = document.createElement("a");
    channelLinkElement.href = link;
    channelLinkElement.innerText = "Open Channel";

    document.body.appendChild(channelLinkElement);

    channelLinkElement.click();

    window.Telegram.WebApp.close();
  } else {
    // Handle case when start_param is not found in the dictionary
    window.Telegram.WebApp.close();
  }
};
