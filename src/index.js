// Importation du module discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Initialisation du client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Token du bot (remplacez par le vôtre)
const token = 'VOTRE_TOKEN_ICI';

// Quand le bot est prêt
client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

// Quand un message est envoyé dans un serveur
client.on('messageCreate', (message) => {
    // Ignore les messages du bot lui-même
    if (message.author.bot) return;

    // Répond à une commande simple
    if (message.content === '!ping') {
        message.reply('Pong !');
    }
});

// Connexion du bot
client.login(token);
