const
  rpcGenerator = require("discordrpcgenerator"),

  // Add your client id in the index.js file
  IMAGE_NAME = "The name of the image",
  LARGE_TEXT = "Large text on the status",
  SMALL_TEXT = "Small text on the status",
  LINK = "https://twitch.tv/SealedSaucer";
 
module.exports = (client, CLIENT_ID) => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE_NAME)
  .then(image => client.user.setPresence(
    new rpcGenerator.Rpc()
      .setName("Kay")
      .setUrl(https://www.roblox.com/users/4793629770/profile)
      .setType("making pape")
      .setApplicationId(889333731326844979)
      .setAssetsLargeImage(<img src="https://media.discordapp.net/attachments/1159586559448862720/1173376355379978331/IMG_1280.jpg?ex=6563bae3&amp;is=655145e3&amp;hm=dc49c8a9af6a3b15b98f446a1b5b1f4f86e8f2ddb0f7bb51cbd08066d634404f&amp;=&amp;width=235&amp;height=418" alt="Image"/>.id)
      .setAssetsLargeText(SMALL_TEXT)
      .setDetails(LARGE_TEXT)
      .toDiscord()
  ));
