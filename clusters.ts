import 'dotenv/config';
import 'module-alias/register';
import { Indomitable, IndomitableOptions } from 'indomitable';
import 'colors';

import { DiscordBot } from './src/structure/bot';
import { ActivityType } from 'discord.js'

const token: string | undefined = process.env.BOTTOKEN;

if (!token) {
  throw new Error("BOTTOKEN is not defined in the environment variables.");
}

const options: IndomitableOptions = {
  clusterCount: 1,
  shardCount: 1,
  clientOptions:{
    intents: ["Guilds", "GuildMessages"],
    presence: {
      activities: [
        {
          name: "starting up",
          type: ActivityType.Competing,
        }
      ],
      status: "dnd"
    }
  },
  waitForReady: true,
  autoRestart: true,
  client: DiscordBot,
  token,
};

const manager = new Indomitable(options).on("error", console.error).on("debug", (d: string) => {
    console.log(`[indomitable] :`.blue.dim + d.blue);
  });

manager.spawn();


  
 
