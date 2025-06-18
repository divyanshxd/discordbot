import { Client, ClientOptions } from 'discord.js';
import index from '../index';

export class DiscordBot<Ready extends boolean = boolean> extends Client<Ready> {
  index: unknown;

  constructor(options: ClientOptions) {
    super({...options});
    this.index = index(this);
  }
}
