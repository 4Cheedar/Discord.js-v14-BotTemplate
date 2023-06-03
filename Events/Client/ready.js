const { loadCommands } = require("../../Handlers/commandHandler");
const { ActivityType } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`${client.user.tag} connected successfully `);

    client.user.setPresence({
      activities: [{ name: `Bot started`, type: ActivityType.Watching }],
      status: "dnd",
    });

    loadCommands(client);
  },
};
