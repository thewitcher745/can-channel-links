window.onload = async function () {
  // Define the dictionary of key-value pairs (link IDs to target URLs)
  const response = await fetch("./links.json");
  const linkDictionary = await response.json();

  console.log(linkDictionary);

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

    // window.alert("Redirecting to channel..." + startParam);

    channelLinkElement.click();

    document.body.removeChild(channelLinkElement);

    // Close the window
    window.Telegram.WebApp.onEvent("deactivated", function () {
      window.Telegram.WebApp.close();
      window.Telegram.WebApp.expand();

      setTimeout(() => {
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.close();
      }, 1000);

      setTimeout(() => {
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.close();
      }, 3000);
    });
  } else {
    // Handle case when start_param is not found in the dictionary
    window.Telegram.WebApp.close();
  }
};
