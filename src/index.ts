import { Client } from 'discord.js';

export default (client: Client): void => {
  client.on('ready', (c) => {
    client.user?.setPresence({ 
      status: 'online',
      activities: [{
        name: 'watcha you', 
        type: 4
      }]
    });
  });
};
