window.onload = function () {
  // Define the dictionary of key-value pairs (link IDs to target URLs)
  const linkDictionary = {
    CAN_Algo: "https://t.me/+6V6xxWEXw25kOTk0",
    Cryptoboard: "https://t.me/+dmQd0WWdqCc1NjBk",
  };

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
