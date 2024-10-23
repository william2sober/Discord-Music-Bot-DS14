module.exports = {
	aliases: ["ping"], // Alternate names for the command
	name: "ping", // Command name
	execute: async (msg, args, bot) => {
		const latency = bot.ws.ping; // Get the bot's websocket latency
		const sentMessage = await msg.reply("Pinging..."); // Send a temporary message
		const timeTaken = sentMessage.createdTimestamp - msg.createdTimestamp; // Calculate the round-trip latency
		
		// Edit the original message to display the round-trip latency
		return sentMessage.edit(`${timeTaken}ms`);
	},
};
