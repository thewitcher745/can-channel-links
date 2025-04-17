window.onload = async function () {
  // Define the dictionary of key-value pairs (link IDs to target URLs)
  const response = await fetch("./links.json");
  const linkDictionary = await response.json();

  // Get the start_param from URL parameters
  const urlParams = new URLSearchParams(window.Telegram.WebApp.initData);
  const startParam = urlParams.get("start_param");

  // Navigate to the corresponding link if it exists in the dictionary
  if (startParam && linkDictionary[startParam]) {
    const link = linkDictionary[startParam];

    const channelLinkElement = document.createElement("a");
    channelLinkElement.href = link;
    channelLinkElement.innerText = "Open Channel";

    // Close the window when the user tries to maximize it (in the edge cases when it doesn't close)
    window.Telegram.WebApp.onEvent("viewportChanged", function () {
      window.Telegram.WebApp.close();
    });

    document.body.appendChild(channelLinkElement);

    channelLinkElement.click();

    document.body.removeChild(channelLinkElement);

    window.close();
  } else {
    // Handle case when start_param is not found in the dictionary
    window.close();
  }
};
