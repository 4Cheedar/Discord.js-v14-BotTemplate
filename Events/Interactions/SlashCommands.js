const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  name: "interactionCreate",
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: "Command is not working.",
        ephemeral: true,
      });

    if (command.developer && interaction.user.id !== process.env.DEV_BOT_ID)
      return interaction.reply({
        content: "Command Available only for Developer!",
        ephemeral: true,
      });

    command.execute(interaction, client);
  },
};
