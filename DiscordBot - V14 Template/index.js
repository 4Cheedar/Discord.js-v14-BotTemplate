const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const {
  Guilds,
  GuildMembers,
  GuildMessages,
  GuildVoiceStates,
  GuildMessageReactions,
} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
  intents: [
    Guilds,
    GuildMembers,
    GuildMessages,
    GuildVoiceStates,
    GuildMessageReactions,
  ],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/eventHandler");

client.events = new Collection();
client.commands = new Collection();

// Load Events
loadEvents(client);

// Bot login
client.login(process.env.BOT_TOKEN);

// MySQL connection
const connection = require("./database");
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database:", error);
  } else {
    console.success("Database connection successful!");
  }
});

// Mongoose connection
const { connect } = require("mongoose");

connect(process.env.MONGODB_CONNECT, {})
  .then(() => {
    console.success("MongoDB Successfully Connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
