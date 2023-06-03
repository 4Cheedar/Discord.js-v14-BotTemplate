const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  //Only the developer can use
  developer: true,
  data: new SlashCommandBuilder()
    .setName("dev-exemple")
    .setDescription("A beautiful description of the command"),
  async execute(interaction, client) {
    interaction.reply({
      content: "Hello world :D",
      //Show the message only to the user of the command
      ephemeral: true,
    });
  },
};
